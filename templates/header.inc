<nav class="local-header">
  <div class="container container-relative">
    <h2>
      <a href=""><i class="material-icons">home</i> My app</a>
    </h2>

    <a href="#" class="btn-toggle hidden-lg-up" role="button"
       aria-expanded="false" data-toggle="collapse" data-target="#local-header"
       aria-controls="local-header">Menu
      <span class="lines"></span>
    </a>

    <nav class="nav-user pull-xs-right">
      <ul>
        <?php include('templates/menu-service.inc'); ?>
        <?php include('templates/menu-lang.inc'); ?>
      </ul>
    </nav>

    <nav class="navbar nav-tabs nav-more collapse" id="local-header">
      <?php include('templates/menu-main.inc'); ?>
    </nav>
  </div>
</nav>