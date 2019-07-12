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
              echo "<a href='".$item['link']."' class='header__link ".$item['class']."'>".$item['text']."</a>";
          }
        ?>
      <span class="header__target"></span>
    </menu>
  </div>
</header>

<main class="wrapper content" role="main">
  <figure class="content__left">
    <img src="" alt="" class="content__img lazy-img animate" data-src="img/medicine.jpg">
    <figcaption class="content__caption">
      <span class="black"><?php echo $title ?></span> – <?php echo $medicine_descripton ?>
    </figcaption>
  </figure>
  <div class="content__right">
    <div class="content__head animate">
      <h1 class="content__title"><?php echo $h1 ?></h1>
      <div><?php echo $h1_description ?></div>
    </div>
    <div class="content__list animate">
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