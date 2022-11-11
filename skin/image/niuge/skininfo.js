'use strict';
window.qhly_import_safe(function(lib,game,ui,get,ai,_status){
	var obj = {
    "name": "niuge",
    "origin": {
        "skill": {
            "wuming_shiting": {
                "content": "世界！时间停止！"
            }
        }
    },
    "skin": {
        "友好手势": {
            "info": "",
            "translation": "友好手势"
        },
        "物理时光": {
            "info": "",
            "translation": "物理时光",
            "skill": {
                "wuming_shiting": {
                    "content": "Pause!"
                },
                "huisu": {
                    "content": "Reset,重置！"
                }
            }
        }
    }
};
    game.qhly_importSkinInfo(obj);
});