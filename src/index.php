<?php include 'data.php'; ?>

<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title><?php echo $title ?></title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<header class="header">
  <div class="wrapper flex header__wrap">
    <a href="#" class="logo"><?php echo $title ?></a>
    <div class="header__burger">
      Меню
    </div>
    <menu class="flex header__menu">
        <?php
          foreach ($menu as $item) {
              echo "<li class='header__li'><a href='".$item['link']."' class='header__link ".$item['class']."'>".$item['text']."</a></li>";
          }
        ?>
    </menu>
    <span class="header__target"></span>
  </div>
</header>

<main class="wrapper content">
  <figure class="content__left">
    <img src="img/medicine.jpg" alt="" class="content__img">
    <figcaption class="content__caption">
      <span class="black"><?php echo $title ?></span> – <?php echo $medicine_descripton ?>
    </figcaption>
  </figure>
  <div class="content__right">
    <div class="content__head">
      <h1 class="content__title"><?php echo $h1 ?></h1>
      <div><?php echo $h1_description ?></div>
    </div>
    <div class="content__list">
        <?php
          foreach ($advantages as $item) {
              echo "<div class='content__li'>" . $item . "</div>";
          }
        ?>
    </div>
  </div>
</main>
<script src="js/main.js"></script>
</body>
</html>