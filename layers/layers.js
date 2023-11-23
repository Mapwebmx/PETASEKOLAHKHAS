var wms_layers = [];

var format_SKPK_SEMENANJUNG_LAT_LONG1_0 = new ol.format.GeoJSON();
var features_SKPK_SEMENANJUNG_LAT_LONG1_0 = format_SKPK_SEMENANJUNG_LAT_LONG1_0.readFeatures(json_SKPK_SEMENANJUNG_LAT_LONG1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SKPK_SEMENANJUNG_LAT_LONG1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SKPK_SEMENANJUNG_LAT_LONG1_0.addFeatures(features_SKPK_SEMENANJUNG_LAT_LONG1_0);
var lyr_SKPK_SEMENANJUNG_LAT_LONG1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SKPK_SEMENANJUNG_LAT_LONG1_0, 
                style: style_SKPK_SEMENANJUNG_LAT_LONG1_0,
                interactive: true,
                title: '<img src="styles/legend/SKPK_SEMENANJUNG_LAT_LONG1_0.png" /> SKPK_SEMENANJUNG_LAT_LONG(1)'
            });
var format_SMPK_SEMENANJUNG_LAT_LONG_1 = new ol.format.GeoJSON();
var features_SMPK_SEMENANJUNG_LAT_LONG_1 = format_SMPK_SEMENANJUNG_LAT_LONG_1.readFeatures(json_SMPK_SEMENANJUNG_LAT_LONG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMPK_SEMENANJUNG_LAT_LONG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMPK_SEMENANJUNG_LAT_LONG_1.addFeatures(features_SMPK_SEMENANJUNG_LAT_LONG_1);
var lyr_SMPK_SEMENANJUNG_LAT_LONG_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMPK_SEMENANJUNG_LAT_LONG_1, 
                style: style_SMPK_SEMENANJUNG_LAT_LONG_1,
                interactive: true,
                title: '<img src="styles/legend/SMPK_SEMENANJUNG_LAT_LONG_1.png" /> SMPK_SEMENANJUNG_LAT_LONG'
            });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PERLIS_4 = new ol.format.GeoJSON();
var features_PERLIS_4 = format_PERLIS_4.readFeatures(json_PERLIS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERLIS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERLIS_4.addFeatures(features_PERLIS_4);
var lyr_PERLIS_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PERLIS_4, 
                style: style_PERLIS_4,
                interactive: true,
                title: '<img src="styles/legend/PERLIS_4.png" /> PERLIS'
            });
var format_KEDAH_5 = new ol.format.GeoJSON();
var features_KEDAH_5 = format_KEDAH_5.readFeatures(json_KEDAH_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KEDAH_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KEDAH_5.addFeatures(features_KEDAH_5);
var lyr_KEDAH_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KEDAH_5, 
                style: style_KEDAH_5,
                interactive: true,
                title: '<img src="styles/legend/KEDAH_5.png" /> KEDAH'
            });
var format_PERAK_6 = new ol.format.GeoJSON();
var features_PERAK_6 = format_PERAK_6.readFeatures(json_PERAK_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERAK_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERAK_6.addFeatures(features_PERAK_6);
var lyr_PERAK_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PERAK_6, 
                style: style_PERAK_6,
                interactive: true,
                title: '<img src="styles/legend/PERAK_6.png" /> PERAK'
            });
var format_PAHANG_7 = new ol.format.GeoJSON();
var features_PAHANG_7 = format_PAHANG_7.readFeatures(json_PAHANG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PAHANG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PAHANG_7.addFeatures(features_PAHANG_7);
var lyr_PAHANG_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PAHANG_7, 
                style: style_PAHANG_7,
                interactive: true,
                title: '<img src="styles/legend/PAHANG_7.png" /> PAHANG'
            });
var format_SELANGOR_8 = new ol.format.GeoJSON();
var features_SELANGOR_8 = format_SELANGOR_8.readFeatures(json_SELANGOR_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SELANGOR_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SELANGOR_8.addFeatures(features_SELANGOR_8);
var lyr_SELANGOR_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SELANGOR_8, 
                style: style_SELANGOR_8,
                interactive: true,
                title: '<img src="styles/legend/SELANGOR_8.png" /> SELANGOR'
            });
var format_JOHOR_9 = new ol.format.GeoJSON();
var features_JOHOR_9 = format_JOHOR_9.readFeatures(json_JOHOR_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JOHOR_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JOHOR_9.addFeatures(features_JOHOR_9);
var lyr_JOHOR_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JOHOR_9, 
                style: style_JOHOR_9,
                interactive: true,
                title: '<img src="styles/legend/JOHOR_9.png" /> JOHOR'
            });
var format_MELAKA_10 = new ol.format.GeoJSON();
var features_MELAKA_10 = format_MELAKA_10.readFeatures(json_MELAKA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MELAKA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MELAKA_10.addFeatures(features_MELAKA_10);
var lyr_MELAKA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MELAKA_10, 
                style: style_MELAKA_10,
                interactive: true,
                title: '<img src="styles/legend/MELAKA_10.png" /> MELAKA'
            });
var format_KELANTAN_11 = new ol.format.GeoJSON();
var features_KELANTAN_11 = format_KELANTAN_11.readFeatures(json_KELANTAN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KELANTAN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELANTAN_11.addFeatures(features_KELANTAN_11);
var lyr_KELANTAN_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KELANTAN_11, 
                style: style_KELANTAN_11,
                interactive: true,
                title: '<img src="styles/legend/KELANTAN_11.png" /> KELANTAN'
            });
var format_TERENGGANU_12 = new ol.format.GeoJSON();
var features_TERENGGANU_12 = format_TERENGGANU_12.readFeatures(json_TERENGGANU_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TERENGGANU_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERENGGANU_12.addFeatures(features_TERENGGANU_12);
var lyr_TERENGGANU_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TERENGGANU_12, 
                style: style_TERENGGANU_12,
                interactive: true,
                title: '<img src="styles/legend/TERENGGANU_12.png" /> TERENGGANU'
            });
var format_NEGERISEMBILAN_13 = new ol.format.GeoJSON();
var features_NEGERISEMBILAN_13 = format_NEGERISEMBILAN_13.readFeatures(json_NEGERISEMBILAN_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEGERISEMBILAN_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEGERISEMBILAN_13.addFeatures(features_NEGERISEMBILAN_13);
var lyr_NEGERISEMBILAN_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NEGERISEMBILAN_13, 
                style: style_NEGERISEMBILAN_13,
                interactive: true,
                title: '<img src="styles/legend/NEGERISEMBILAN_13.png" /> NEGERI SEMBILAN'
            });
var format_PULAUPINANG_14 = new ol.format.GeoJSON();
var features_PULAUPINANG_14 = format_PULAUPINANG_14.readFeatures(json_PULAUPINANG_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PULAUPINANG_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PULAUPINANG_14.addFeatures(features_PULAUPINANG_14);
var lyr_PULAUPINANG_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PULAUPINANG_14, 
                style: style_PULAUPINANG_14,
                interactive: true,
                title: '<img src="styles/legend/PULAUPINANG_14.png" /> PULAU PINANG'
            });
var format_JLNUTAMA_15 = new ol.format.GeoJSON();
var features_JLNUTAMA_15 = format_JLNUTAMA_15.readFeatures(json_JLNUTAMA_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JLNUTAMA_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JLNUTAMA_15.addFeatures(features_JLNUTAMA_15);
var lyr_JLNUTAMA_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JLNUTAMA_15, 
                style: style_JLNUTAMA_15,
                interactive: true,
                title: '<img src="styles/legend/JLNUTAMA_15.png" /> JLN UTAMA'
            });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_SKPK_SEMENANJUNG_LAT_LONG1_0,lyr_SMPK_SEMENANJUNG_LAT_LONG_1,],
                                title: "group1"});

lyr_SKPK_SEMENANJUNG_LAT_LONG1_0.setVisible(true);lyr_SMPK_SEMENANJUNG_LAT_LONG_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_PERLIS_4.setVisible(true);lyr_KEDAH_5.setVisible(true);lyr_PERAK_6.setVisible(true);lyr_PAHANG_7.setVisible(true);lyr_SELANGOR_8.setVisible(true);lyr_JOHOR_9.setVisible(true);lyr_MELAKA_10.setVisible(true);lyr_KELANTAN_11.setVisible(true);lyr_TERENGGANU_12.setVisible(true);lyr_NEGERISEMBILAN_13.setVisible(true);lyr_PULAUPINANG_14.setVisible(true);lyr_JLNUTAMA_15.setVisible(true);
var layersList = [group_group1,lyr_OSMStandard_2,lyr_OpenStreetMap_3,lyr_PERLIS_4,lyr_KEDAH_5,lyr_PERAK_6,lyr_PAHANG_7,lyr_SELANGOR_8,lyr_JOHOR_9,lyr_MELAKA_10,lyr_KELANTAN_11,lyr_TERENGGANU_12,lyr_NEGERISEMBILAN_13,lyr_PULAUPINANG_14,lyr_JLNUTAMA_15];
lyr_SKPK_SEMENANJUNG_LAT_LONG1_0.set('fieldAliases', {'NAMA SEKOLAH': 'NAMA SEKOLAH', 'X': 'X', 'Y': 'Y', 'ALAMAT': 'ALAMAT', 'NO. TELEON': 'NO. TELEON', 'Kategori kelas': 'Kategori kelas', 'Arah': 'Arah', 'email': 'email', });
lyr_SMPK_SEMENANJUNG_LAT_LONG_1.set('fieldAliases', {'NAMA SEKOLAH': 'NAMA SEKOLAH', 'field_2': 'field_2', 'ALAMAT': 'ALAMAT', 'NO. TELEON': 'NO. TELEON', 'Kategori kelas': 'Kategori kelas', 'Arah': 'Arah', 'email': 'email', 'field_8': 'field_8', 'field_9': 'field_9', 'X': 'X', 'Y': 'Y', });
lyr_PERLIS_4.set('fieldAliases', {'id': 'id', 'n_daerah': 'n_daerah', 'Luas': 'Luas', 'NAGERI': 'NAGERI', });
lyr_KEDAH_5.set('fieldAliases', {'id': 'id', 'POPULASI': 'POPULASI', 'KELUASAN': 'KELUASAN', 'NEGERI': 'NEGERI', });
lyr_PERAK_6.set('fieldAliases', {'id': 'id', 'KELUASAN': 'KELUASAN', 'POPULASI': 'POPULASI', 'NAGERI': 'NAGERI', });
lyr_PAHANG_7.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_SELANGOR_8.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', ' NEGERI': ' NEGERI', });
lyr_JOHOR_9.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_MELAKA_10.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_KELANTAN_11.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_TERENGGANU_12.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_NEGERISEMBILAN_13.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_PULAUPINANG_14.set('fieldAliases', {'id': 'id', 'Keluasan': 'Keluasan', 'Populasi': 'Populasi', 'NEGERI': 'NEGERI', });
lyr_JLNUTAMA_15.set('fieldAliases', {'nama jln': 'nama jln', 'jenis jln': 'jenis jln', });
lyr_SKPK_SEMENANJUNG_LAT_LONG1_0.set('fieldImages', {'NAMA SEKOLAH': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'ALAMAT': 'TextEdit', 'NO. TELEON': 'TextEdit', 'Kategori kelas': 'TextEdit', 'Arah': 'TextEdit', 'email': 'TextEdit', });
lyr_SMPK_SEMENANJUNG_LAT_LONG_1.set('fieldImages', {'NAMA SEKOLAH': 'TextEdit', 'field_2': 'TextEdit', 'ALAMAT': 'TextEdit', 'NO. TELEON': 'TextEdit', 'Kategori kelas': 'TextEdit', 'Arah': 'TextEdit', 'email': 'TextEdit', 'field_8': 'TextEdit', 'field_9': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_PERLIS_4.set('fieldImages', {'id': 'TextEdit', 'n_daerah': 'TextEdit', 'Luas': 'TextEdit', 'NAGERI': 'TextEdit', });
lyr_KEDAH_5.set('fieldImages', {'id': 'TextEdit', 'POPULASI': 'TextEdit', 'KELUASAN': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_PERAK_6.set('fieldImages', {'id': 'TextEdit', 'KELUASAN': 'TextEdit', 'POPULASI': 'TextEdit', 'NAGERI': 'TextEdit', });
lyr_PAHANG_7.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_SELANGOR_8.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', ' NEGERI': 'TextEdit', });
lyr_JOHOR_9.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_MELAKA_10.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_KELANTAN_11.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_TERENGGANU_12.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_NEGERISEMBILAN_13.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_PULAUPINANG_14.set('fieldImages', {'id': 'TextEdit', 'Keluasan': 'TextEdit', 'Populasi': 'TextEdit', 'NEGERI': 'TextEdit', });
lyr_JLNUTAMA_15.set('fieldImages', {'nama jln': 'TextEdit', 'jenis jln': 'TextEdit', });
lyr_SKPK_SEMENANJUNG_LAT_LONG1_0.set('fieldLabels', {});
lyr_SMPK_SEMENANJUNG_LAT_LONG_1.set('fieldLabels', {});
lyr_PERLIS_4.set('fieldLabels', {'id': 'inline label', 'n_daerah': 'inline label', 'Luas': 'inline label', 'NAGERI': 'inline label', });
lyr_KEDAH_5.set('fieldLabels', {'id': 'inline label', 'POPULASI': 'inline label', 'KELUASAN': 'inline label', 'NEGERI': 'inline label', });
lyr_PERAK_6.set('fieldLabels', {'id': 'inline label', 'KELUASAN': 'inline label', 'POPULASI': 'inline label', 'NAGERI': 'inline label', });
lyr_PAHANG_7.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_SELANGOR_8.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', ' NEGERI': 'inline label', });
lyr_JOHOR_9.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_MELAKA_10.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_KELANTAN_11.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_TERENGGANU_12.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_NEGERISEMBILAN_13.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_PULAUPINANG_14.set('fieldLabels', {'id': 'inline label', 'Keluasan': 'inline label', 'Populasi': 'inline label', 'NEGERI': 'inline label', });
lyr_JLNUTAMA_15.set('fieldLabels', {'nama jln': 'inline label', 'jenis jln': 'inline label', });
lyr_JLNUTAMA_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});