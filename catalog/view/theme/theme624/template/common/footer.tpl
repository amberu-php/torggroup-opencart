<footer>	
  <div class="container">
	<div class="row">
	<div class="col-sm-7">
	<div class="row">
		<div class="col-sm-3">
		<?php if ($informations) { ?>
			<div class="footer_box">
				<h5><?php echo $text_information; ?></h5>
				<ul class="list-unstyled">
				<?php foreach ($informations as $information) { ?>
				<li><a href="<?php echo $information['href']; ?>"><?php echo $information['title']; ?></a></li>
				<?php } ?>
				</ul>
			</div>
			<?php } ?>
		</div>
		<div class="col-sm-4">
			<div class="footer_box">
				<h5><?php echo $text_service; ?></h5>
				<ul class="list-unstyled">
				<li><a href="<?php echo $contact; ?>"><?php echo $text_contact; ?></a></li>
				<li><a href="<?php echo $return; ?>"><?php echo $text_return; ?></a></li>
				<li><a href="<?php echo $sitemap; ?>"><?php echo $text_sitemap; ?></a></li>
				</ul>
			</div>
		</div>
		<div class="col-sm-3 clearleft">
			<div class="footer_box">
				<h5><?php echo $text_extra; ?></h5>
				<ul class="list-unstyled">
				<li><a href="<?php echo $manufacturer; ?>"><?php echo $text_manufacturer; ?></a></li>
				<li><a href="<?php echo $voucher; ?>"><?php echo $text_voucher; ?></a></li>
				<li><a href="<?php echo $affiliate; ?>"><?php echo $text_affiliate; ?></a></li>
				<li><a href="<?php echo $special; ?>"><?php echo $text_special; ?></a></li>
				</ul>
			</div>
		</div>		
		<div class="col-sm-4">
			<div class="footer_box">
				<h5><?php echo $text_account; ?></h5>
				<ul class="list-unstyled">
				<li><a href="<?php echo $account; ?>"><?php echo $text_account; ?></a></li>
				<li><a href="<?php echo $order; ?>"><?php echo $text_order; ?></a></li>
				<li><a href="<?php echo $wishlist; ?>"><?php echo $text_wishlist; ?></a></li>
				<li><a href="<?php echo $newsletter; ?>"><?php echo $text_newsletter; ?></a></li>
				</ul>
			</div>
		</div>
		</div>
		</div>
		<!-- SHOULD BE col-sm-5 bellow, because neighbor col-sm-7 -->
        <div class="col-sm-5 amberu-contacts">
			<div class="inner-wrapper">
				<!-- TODO replace hardcoded numbers to admin settings handle of comma separated numbers in input -->
				<?php $telephone = array(); $telephone[0] = "+380506698515"; $telephone[1] = "+380989818849"; ?>
				<div class="phone">
					<a href="tel:<?php echo $telephone[0]; ?>"><i class="fa fa-phone"></i><?php echo $telephone[0]; ?></a>
				</div>
				<div class="phone">
					<a href="tel:<?php echo $telephone[0]; ?>"><i class="fa fa-phone"></i><?php echo $telephone[1]; ?></a>
				</div>
				<div class="amberu-address"><i class="fa fa-envelope"></i><?php echo $store_email; ?></div>
				<div class="amberu-address"><i class="fa fa-hand-o-right"></i><?php 
					echo sprintf("%s: %s", $store_owner, $store);
					?>
				</div>
				<div class="amberu-address"><i class="fa fa-map-marker"></i><?php echo $address; ?></div>

				<div class="facebook_box"></div>
			</div>
        </div>
	</div>
	
  </div>
  
  <?php if ($footer_top) { ?>
	<div class="footer">
		<?php if ($maintenance == 0){ ?>
				<?php echo $footer_top; ?>
			<?php } ?>
	</div>
	<?php } ?>
	
	<div class="copyright">
		<div class="container">
			<?php echo $powered; ?><!-- [[%FOOTER_LINK]] -->
		</div> 
	</div>
</footer>
<script src="catalog/view/theme/<?php echo $theme_path; ?>/js/livesearch.js" type="text/javascript"></script>
<script src="catalog/view/theme/<?php echo $theme_path; ?>/js/script.js" type="text/javascript"></script>
</div>

<div class="ajax-overlay"></div>

</body></html>