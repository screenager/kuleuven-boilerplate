<?php
$ictsTemplates = 'templates/icts/';
$ictsLayout = ''; // leave empty, or use "intranet/", "kulak/", ..
?>

<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/png" href="img/favicon.png" />
  <base href="http://localhost/layout2016/" />
  <title>My app</title>
  <link href="app.css" rel="stylesheet">
</head>

<body>
<div class="l-page">
  <!-- global header-->
  <?php include($ictsTemplates . $ictsLayout . 'header.nl.inc'); ?>
  <!-- end global header-->

  <!-- local header-->
  <?php include('templates/header.inc'); ?>
  <!-- end local header-->

  <!-- main content-->
  <div class="container">
    <div class="row">
      <div id="contentwrapper" class="col-xs-12 col-md-8">
        <div class="menu-2nd-level">
          <?php include('templates/menu-2nd-level.inc'); ?>
        </div>

        <?php include('templates/breadcrumbs.inc'); ?>

        <h1 id="parent-fieldname-title" class="documentFirstHeading">
          My title
        </h1>

        <div id="content-core">
          Lorem ipsum
        </div>
      </div><!-- end contentwrapper -->

      <div class="col-xs-12 col-md-4">
        Content right
      </div>
    </div>

    <!-- global doormat-->
    <?php include($ictsTemplates . $ictsLayout . 'footer.nl.inc'); ?>
    <!-- end global doormat-->

  </div> <!-- end container -->
</div>

<!-- flyout-->
<?php include($ictsTemplates . $ictsLayout . 'flyout.nl.inc'); ?>
<!-- end flyout-->

<script src="app.js"></script>
</body>
</html>
