interface Product {
    cats_data: {
        [id:number]:{
            cat_id: string;
            cat_name: string;
            cat_path: string;
        }
    }
    prd_name: string;
    prod_added: string;
    prod_allegro_earn: number | null;
    prod_allegro_ignore: string;
    prod_allegro_template: string;
    prod_amount: string;
    prod_amount_precision: string;
    prod_availability_status_id: string;
    prod_barcode: string;
    prod_boxamount: string;
    prod_boxrestrict: string;
    prod_buy_price: string;
    prod_canonical: string;
    prod_compare_ignore: string;
    prod_currency: string;
    prod_desc_pl: string;
    prod_desclong_pl: string;
    prod_dimensions: number | null;
    prod_disable_auto_wholesale_order: string;
    prod_discount: number;
    prod_discount_per: number;
    prod_ean: string;
    prod_gtu: number | null;
    prod_hidden: string;
    prod_id: string;
    prod_ignore_wholesale_if_delete: string;
    prod_img_allegro: number | null;
    prod_img_src: string;
    prod_info1_pl: string;
    prod_info2_pl: string;
    prod_info3_pl: string;
    prod_info4_pl: string;
    prod_info5_pl: string;
    prod_isbn: string;
    prod_keywords_pl: string;
    prod_min_order_amount: string;
    prod_name: string;
    prod_name_auctions_pl: string;
    prod_noindex: string;
    prod_note: string;
    prod_oldprice: number | null;
    prod_override_by_stock: string;
    prod_pkwiu: string;
    prod_prev_price: string;
    prod_price: string;
    prod_producer: string;
    prod_promo_end: string;
    prod_promo_price: string;
    prod_promo_start: string;
    prod_purchased: string;
    prod_sales: string;
    prod_sales_gain: string;
    prod_sales_last_update_security: string;
    prod_search_hidden: string;
    prod_ship_days: string;
    prod_shipments_cache: string;
    prod_shipping_time: string;
    prod_status: string;
    prod_subiekt_ignore: string;
    prod_symbol: string;
    prod_symbol_int: string;
    prod_symbol_int_orig: string;
    prod_tax_value: string;
    prod_unit: string;
    prod_views: string;
    prod_weight: string;
}

type Filter = string;

export type { Product, Filter }