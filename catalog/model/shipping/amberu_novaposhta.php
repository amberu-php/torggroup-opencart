<?php
class ModelShippingAmberuNovaposhta extends Model {
	function getQuote($address) {
		$this->load->language('shipping/amberu_novaposhta');

		$query = $this->db->query("SELECT * FROM " . DB_PREFIX . "zone_to_geo_zone WHERE geo_zone_id = '" . (int)$this->config->get('amberu_novaposhta_geo_zone_id') . "' AND country_id = '" . (int)$address['country_id'] . "' AND (zone_id = '" . (int)$address['zone_id'] . "' OR zone_id = '0')");

		if (!$this->config->get('amberu_novaposhta_geo_zone_id')) {
			$status = true;
		} elseif ($query->num_rows) {
			$status = true;
		} else {
			$status = false;
		}

		if ($this->cart->getSubTotal() < $this->config->get('amberu_novaposhta_total')) {
			$status = false;
		}

		$method_data = array();

		if ($status) {
			$quote_data = array();

			$quote_data['amberu_novaposhta'] = array(
				'code'         => 'amberu_novaposhta.amberu_novaposhta',
				'title'        => $this->language->get('text_subtitle'),
				'cost'         => 0.00,
				'tax_class_id' => 0,
//				'text'         => $this->currency->format(0.00)
				'text'		   => $this->language->get('text_description')
			);

			$method_data = array(
				'code'       => 'amberu_novaposhta',
				'title'      => $this->language->get('text_title'),
				'quote'      => $quote_data,
				'sort_order' => $this->config->get('amberu_novaposhta_sort_order'),
				'error'      => false
			);
		}

		return $method_data;
	}
}