<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <title>Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <link href="assets/default/content.css" rel="stylesheet" type="text/css" />
    <link href="scripts/contentbuilder.css" rel="stylesheet" type="text/css" />
</head>
<body>

<div class="container">
    <div class="row clearfix">
        <div class="column full center">
            <br /><br /><br />
            <button onclick="save()" class="btn btn-primary"> Save </button>
			<br /><br />
        </div>
    </div>
</div>

<div id="contentarea" class="container">
    <?php
    $myFile = "content.html";
    $fh = fopen($myFile, 'r');
    $theData = fread($fh, filesize($myFile));
    fclose($fh);
    echo $theData;
    ?>
</div>

<script src="scripts/jquery-1.11.1.min.js" type="text/javascript"></script>
<script src="scripts/jquery-ui.min.js" type="text/javascript"></script>
<script src="scripts/contentbuilder.js" type="text/javascript"></script>
<script src="scripts/saveimages.js" type="text/javascript"></script>

<script type="text/javascript">

    jQuery(document).ready(function ($) {

        $("#contentarea").contentbuilder({
            zoom: 0.85,
            snippetFile: 'assets/default/snippets.html'
        });

    });


    function save() {
        
        //Save Images
        $("#contentarea").saveimages({
            handler: 'saveimage.php',
            onComplete: function () {

                //Get Content
                var sHTML = $('#contentarea').data('contentbuilder').html();

                //Save Content
                $.ajax({
                    url: "savecontent.php",
                    type: "post",
                    data: {
                        content: sHTML
                    },
                    success: function (result) {
                        alert('Success');
                    },
                    error: function () {
                        alert('Failure');
                    }
                }); 

            }
        });
        $("#contentarea").data('saveimages').save();

    }

</script>

</body>
</html>
