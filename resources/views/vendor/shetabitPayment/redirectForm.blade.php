<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Forwarding to Secure Payment Provider</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

            body {
                background-color: #212121;
                color: #e0e0e0;
                font-family: 'Roboto', sans-serif;
            }

            .spinner > div {
                background-color: #FF1744;
            }

            .spinner > div {
                display: inline-block;
                width: 18px;
                height: 18px;
                background-color: #ff1744;
                border-radius: 100%;
                -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
                animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            }

            .spinner .bounce1 {
                -webkit-animation-delay: -0.32s;
                animation-delay: -0.32s;
            }

            .spinner .bounce2 {
                -webkit-animation-delay: -0.16s;
                animation-delay: -0.16s;
            }

            @-webkit-keyframes sk-bouncedelay {
                0%, 80%, 100% { -webkit-transform: scale(0) }
                40% { -webkit-transform: scale(1.0) }
            }

            @keyframes sk-bouncedelay {
                0%, 80%, 100% {
                    -webkit-transform: scale(0);
                    transform: scale(0);
                } 40% {
                      -webkit-transform: scale(1.0);
                      transform: scale(1.0);
                  }
            }
        </style>
    </head>
    <body onload="submitForm()">
        <div class="flex flex-col items-center justify-center min-h-screen">
            <div class="spinner mt-6">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
            <form class="text-center mt-4" method="{{ $method }}" action="{{ $action }}">
                <p>Forwarding to secure payment provider.</p>
                <p>
                    If you are not automatically redirected to the payment website within
                    <span id="countdown" class="font-bold text-red-500">10</span>
                    seconds...
                </p>

                @foreach($inputs as $name => $value)
                    <input type="hidden" name="{{ $name }}" value="{{ $value }}">
                @endforeach

                <button type="submit" class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Click here
                </button>
            </form>
        </div>
        <script>
            // Total seconds to wait
            var seconds = 10;

            function submitForm() {
                // document.forms[0].submit();
            }

            function countdown() {
                seconds = seconds - 1;
                if (seconds <= 0) {
                    // submit the form
                    submitForm();
                } else {
                    // Update remaining seconds
                    document.getElementById("countdown").innerHTML = seconds;
                    // Count down using javascript
                    window.setTimeout("countdown()", 1000);
                }
            }

            // Run countdown function
            countdown();
        </script>
    </body>
</html>
