<!DOCTYPE html>
<!--[if IE]><![endif]-->
<!--[if IE 8 ]>
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie8"><![endif]-->
<!--[if IE 9 ]>
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>">
<!--<![endif]-->
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $title; ?></title>
    <base href="<?php echo $base; ?>"/>
    <?php if ($description) { ?>
        <meta name="description" content="<?php echo $description; ?>"/>
    <?php } ?>
    <?php if ($keywords) { ?>
        <meta name="keywords" content="<?php echo $keywords; ?>"/>
    <?php } ?>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <?php if ($icon) { ?>
        <link href="<?php echo $icon; ?>" rel="icon"/>
    <?php } ?>

    <script src="catalog/view/javascript/jquery/jquery-2.1.1.min.js" type="text/javascript"></script>
    <link href="catalog/view/javascript/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen"/>
    <script src="catalog/view/javascript/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="catalog/view/javascript/jquery/datetimepicker/moment.js" type="text/javascript"></script>
    <script src="catalog/view/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
    <link href="catalog/view/javascript/jquery/datetimepicker/bootstrap-datetimepicker.min.css" rel="stylesheet">

    <link href="catalog/view/javascript/jquery/owl-carousel/owl.carousel.css" rel="stylesheet">
    <link href="catalog/view/theme/<?php echo $theme_path; ?>/stylesheet/magnificent.css" rel="stylesheet">
    <link href="catalog/view/theme/<?php echo $theme_path; ?>/js/jquery.bxslider/jquery.bxslider.css" rel="stylesheet">
    <link href="catalog/view/theme/<?php echo $theme_path; ?>/stylesheet/photoswipe.css" rel="stylesheet">
    <link href="catalog/view/theme/<?php echo $theme_path; ?>/js/fancybox/jquery.fancybox.css" rel="stylesheet">
    <link href="catalog/view/theme/<?php echo $theme_path; ?>/stylesheet/material-design.css" rel="stylesheet">
    <?php foreach ($styles as $style) { ?>
        <link href="<?php echo $style['href']; ?>" type="text/css" rel="<?php echo $style['rel']; ?>"
              media="<?php echo $style['media']; ?>"/>
    <?php } ?>
    <script src="catalog/view/javascript/amberu-common.js" type="text/javascript"></script>
    <script src="catalog/view/theme/<?php echo $theme_path; ?>/js/common.js" type="text/javascript"></script>
    <script src="catalog/view/javascript/jquery/owl-carousel/owl.carousel.min.js" type="text/javascript"></script>


    <!--custom script-->
    <?php foreach ($scripts as $script) { ?>
        <?php if (strcmp($script, 'catalog/view/javascript/jquery/owl-carousel/owl.carousel.min.js') != 0) { ?>
            <script src="<?php echo $script; ?>" type="text/javascript"></script>
        <?php } ?>
    <?php } ?>
    <script src="catalog/view/theme/<?php echo $theme_path; ?>/js/device.min.js" type="text/javascript"></script>
    <!--[if lt IE 9]>
    <div style=' clear: both; text-align:center; position: relative;'>
        <a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">
            <img src="catalog/view/theme/<?php echo $theme_path; ?>/image/warning_bar_0000_us.jpg" border="0" height="42" width="820"
                 alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."/>
        </a>
    </div>
    <![endif]-->
    <?php echo $google_analytics; ?>
    <link href="catalog/view/theme/<?php echo $theme_path; ?>/stylesheet/stylesheet.css" rel="stylesheet">

			<!--Footer Social Icons-->
			<style type="text/css">
				.footer-social-icons{margin-top:-10px; margin-right: 50px;}
				.footer-social-icons a{width:40px; height:40px; text-align:center; margin:0 2px; display:inline-block; font-size:30px; background:#777; color:#fff; border-radius:50px; -webkit-transition: all 0.3s ease-in-out; -moz-transition: all 0.3s ease-in-out; -o-transition: all 0.3s ease-in-out; -ms-transition: all 0.3s ease-in-out; transition: all 0.3s ease-in-out;}
				.footer-social-icons a:hover, .footer-social-icons a:visited, .footer-social-icons a:active, .footer-social-icons a:focus {color: #fff;}
				.footer-social-icons a{-webkit-transition: all 0.3s ease-in-out; -moz-transition: all 0.3s ease-in-out; -o-transition: all 0.3s ease-in-out; -ms-transition: all 0.3s ease-in-out; transition: all 0.3s ease-in-out;}
				.footer-social-icons a .fa {font-size: 25px; padding: 14px 0px; margin-right: 1px;}
				.footer-social-icons a.facebook:hover{background:#39599f;}
				.footer-social-icons a.twitter:hover{background:#45b0e3;}
				.footer-social-icons a.vk:hover{background:#507299;}
				.footer-social-icons a.instagram:hover{background:#1f1f1f;}
				.footer-social-icons a.linkedin:hover{background:#0177B5;}
				.footer-social-icons a.youtube:hover{background:#C2171D;}
				.footer-social-icons a.google:hover{background:#E21C1B;}
			</style>
			<!--End-->
			
</head>
<body class="<?php echo $class; ?>">
<p id="gl_path" class="hidden"><?php echo $theme_path; ?></p>
<div id="page">
    <header>
		<div class="top-menu">
        <div class="container">
            <nav id="top-links" class="nav toggle-wrap">
                <a class="toggle material-design-settings49" href='#'></a>
                <ul class="toggle_cont">
                    <li class="first"><a href="<?php echo $home; ?>" title="<?php echo $text_home; ?>" ><span><?php echo $text_home; ?></span></a></li>
					<li><a href="<?php echo $wishlist; ?>" id="wishlist-total" title="<?php echo $text_wishlist; ?>"><span><?php echo $text_wishlist; ?></span></a></li>
                    <li class="toggle-wrap">
                        <a href="<?php echo $account; ?>" title="<?php echo $text_account; ?>"
                           class="toggle"><span><?php echo $text_account; ?></span></a>
                        <ul class="toggle_cont toggle_cont__right">
                            <?php if ($logged) { ?>
                                <li><a href="<?php echo $account; ?>"><?php echo $text_account; ?></a></li>
                                <li><a href="<?php echo $order; ?>"><?php echo $text_order; ?></a></li>
                                <li><a href="<?php echo $transaction; ?>"><?php echo $text_transaction; ?></a></li>
                                <li><a href="<?php echo $download; ?>"><?php echo $text_download; ?></a></li>
                                <li><a href="<?php echo $logout; ?>"><?php echo $text_logout; ?></a></li>
                            <?php } else { ?>
                                <li><a href="<?php echo $register; ?>"><?php echo $text_register; ?></a></li>
                                <li><a href="<?php echo $login; ?>"><?php echo $text_login; ?></a></li>
                            <?php } ?>
                        </ul>
                    </li>
                    <li><a href="<?php echo $shopping_cart; ?>" title="<?php echo $text_shopping_cart; ?>"><span><?php echo $text_shopping_cart; ?></span></a></li>
                    <li><a href="<?php echo $checkout; ?>" title="<?php echo $text_checkout; ?>"><span><?php echo $text_checkout; ?></span></a></li>
                </ul>
            </nav>
            <?php echo $cart; ?>
			<?php echo $currency; ?>
            <?php echo $language; ?>			
        </div>
		</div>
		<div class="container block-logo">
			
			<div id="logo" class="logo">
				<?php if ($logo) { ?>
					<a href="<?php echo $home; ?>"><img src="<?php echo $logo; ?>" title="<?php echo $name; ?>" alt="<?php echo $name; ?>" class="img-responsive"/></a>
				<?php } else { ?>
					<h1>
						<a href="<?php echo $home; ?>"><?php echo $name; ?></a>
					</h1>
				<?php } ?>
			</div>
            <!-- TODO replace hardcoded numbers to admin settings handle of comma separated numbers in input -->
            <?php $telephone = array(); $telephone[0] = "+38 050 669 85 15"; $telephone[1] = "+38‎ 098 981 88 49"; ?>
            <div class="phone">
                <div class="amberu-phone-item">
                    <a href="tel:<?php echo $telephone[0]; ?>"><i class="fa fa-phone"></i><?php echo $telephone[0]; ?></a>
                </div>
                <div class="amberu-phone-item">
                    <a href="tel:<?php echo $telephone[0]; ?>"><i class="fa fa-phone"></i><?php echo $telephone[1]; ?></a>
                </div>
            </div>
			<?php echo $search; ?>			
		</div>

        <?php if ($categories) { ?>
            <div class="container">
                <div id="menu-gadget" class="menu-gadget" >
                    <?php if ($categories_tm) {
                        echo $categories_tm;
                    } ?>
                </div>
            </div>
        <?php } ?>
        <?php if ($categories) { ?>
		<div id="stuck" class="stuck-menu">
            <div id="tm_menu" class="nav__primary">
                <div class="container">
                    <?php if ($categories_tm) {
                        echo $categories_tm;
                    } ?>
                    <div class="clear"></div>
                </div>
            </div>
		</div>
        <?php } ?>
    </header>



