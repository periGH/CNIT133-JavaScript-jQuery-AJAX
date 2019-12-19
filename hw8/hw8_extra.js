 var index = -1; // Index of current image displayed
        var timeoutId = null; // The id returned from a setTimeout call

        function showPic(dir) {
            var xhr = createXHR();
            if (xhr == null) {
                return;
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // Get the response which is imageName^index
                    var parts = xhr.responseText.split("^");
                    index = parseInt(parts[1]);

                    // Hide the enclosing div element before setting the img properties.
                    // The img onload event handler, which is set in init(), makes the enclosing div visible only after
                    // the image is completely loaded. This prevents the caption from jumping,
                    // and the previous image from fading in again before the new one can take its place.
                    var picElem = document.getElementById("pic");
                    document.getElementById("picArea").style.visibility = "hidden";

                    // Set the img src, alt, and opacity
                    picElem.src = "images/" + parts[0];
                    picElem.alt = parts[0];
                    setOpacity("pic", 0);

                    // Set the picture caption
                    document.getElementById("picName").innerHTML = "<strong>Image #" + (index + 1) + "</strong><br />" + parts[0];

                    // Stop previous fadeIn if it's still running.
                    // Start a new fadeIn process.
                    stopFadeIn();
                    fadeIn("pic", 0);
                }
            };
            var uri = "gallery9ec.php?index=" + index + "&dir=" + dir;
            xhr.open("GET", encodeURI(uri), true);
            xhr.send(null);
        }

        function fadeIn(elemId, opacity) {
            // Increment and set the opacity
            opacity++;
            setOpacity(elemId, opacity);

            // Set timer to call fadeIn again only if we're not done,
            if (opacity < 100) {
                timeoutId = setTimeout(function () {
                    fadeIn(elemId, opacity);
                }, 10);
            }
        }

        function stopFadeIn() {
            if (timeoutId != null) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
        }

        function setOpacity(elemId, opacity) {
            var el = document.getElementById(elemId).style;
            el.opacity = (opacity / 100);
            el.MozOpacity = (opacity / 100);
            el.KhtmlOpacity = (opacity / 100);
            el.filter = "alpha(opacity=" + opacity + ")";
        }

        function createXHR() {
            if (typeof XMLHttpRequest != "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject != "undefined") {
                if (typeof arguments.callee.activeXString != "string") {
                    var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"];
                    var i, len;

                    for (i = 0, len = versions.length; i < len; i++) {
                        try {
                            new ActiveXObject(versions[i]);
                            arguments.callee.activeXString = versions[i];
                            break;
                        } catch (ex) {
                            //skip
                        }
                    }
                }
                return new ActiveXObject(arguments.callee.activeXString);
            } else {
                throw new Error("No XHR object available.");
            }
        }

        function init() {
            document.getElementById("pic").onload = function () {
                document.getElementById('picArea').style.visibility = "visible";
            };
            // Attach event handlers
            document.getElementById("prev").onclick = function () {
                showPic(-1);
            };
            document.getElementById("next").onclick = function () {
                showPic(1);
            };

            // Show the first picture
            showPic(1);
        }