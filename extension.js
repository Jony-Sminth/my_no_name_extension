game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"无名",content:function(config,pack){
lib.group.push('shui');
lib.translate.shui='睡'; lib.translate.shuiColor="#FFFF00"
//------------------------------------------------特效支持--------------------------------------------------//    
 otherFunction=['zuozheName','dead','element','over','gameStart','observe','game','showauthoranimation','getted','addCharacterPack'];
     		game[otherFunction[8]]=function(str,time){	
                 ui.arena.hide();
	             var img = window["document"]["createElement"]("img");
	             img["setAttribute"]("src", str);
	             img["style"]["height"] = '100%';
	             img["style"]["width"] = '100%';
	             ui["window"]["appendChild"](img);
	             game["pause"]();			
	             setTimeout(function(){
	                 ui["window"]["style"]["transition"] = '';
		             ui["window"]["removeChild"](img);
		  ui.arena.show();           game["resume"]();
                 },time);						
			}
 game.wumingGif=function(str,width,height,isAnimation){
var str1='';
if (isAnimation) {
str1=lib.assetURL+'extension/无名/'+str;
return str1;
}
else {
str1='<img src='+lib.assetURL+'extension/无名/'+str+' width='+width+'   height='+height+'>';
return str1;
}
}  
    otherFunction=['zuozheName','dead','element','over','gameStart','observe','game','showauthoranimation','getted','addCharacterPack'];
     		game[otherFunction[7]]=function(str,time){	
             //ui.arena.hide();
	             var img = window["document"]["createElement"]("img");
	             img["setAttribute"]("src", str);
	             img["style"]["height"] = '100%';
	             img["style"]["width"] = '100%';
	             ui["window"]["appendChild"](img);
	             game["pause"]();			
	             setTimeout(function(){
	                 ui["window"]["style"]["transition"] = '';
		             ui["window"]["removeChild"](img);
		  ui.arena.show();           game["resume"]();
                 },time);						
			}
 game.wumingGif=function(str,width,height,isAnimation){
var str1='';
if (isAnimation) {
str1=lib.assetURL+'extension/无名/'+str;
return str1;
}
else {
str1='<img src='+lib.assetURL+'extension/无名/'+str+' width='+width+'   height='+height+'>';
return str1;
}
}



lib.skill._dieAudioyi={
 trigger:{global:'dieBegin',},
 priority:2,
 forced:true,
 unique:true,
 frequent:true,
 content:function(){
 game.playAudio('..','extension','无名',trigger.player.name); 
 },
 }
        game.playwuming = function(fn, dir, sex) {
			if (lib.config.background_speak) {
				if (dir && sex)
					game.playAudio(dir, sex, fn);
				else if (dir)
					game.playAudio(dir, fn);
				else
					game.playAudio('..', 'extension', '无名', fn);
			}
		}; 
  HTMLDivElement.prototype.yit=function(bg,pos,time,func){
    	var that=this;
    	game.broadcastAll(function(that){
			var img=document.createElement('div');
			img.setBackgroundImage(bg+'?'+Math.random());
			if(pos&&typeof pos=='object'){
				for (var i in pos){
					img.style[i]=pos[i];
				}
			}
			img.style.backgroundSize='cover';
			that.appendChild(img);
			setTimeout(function(){
				if(func)func(img);
				else img.delete();
			},time);
		},that);
		},

    game.wumingBgm = function(){
        if(lib.config.ark_backgroundmusic) var bgm = lib.config.ark_backgroundmusic
        if(bgm && bgm != 'origin'){
            ui.backgroundMusic.src = lib.assetURL+'extension/无名/wumingBgm/'+bgm+'.mp3';
            ui.backgroundMusic.addEventListener('ended',game.wumingBgm);
        }
        else{
            game.playBackgroundMusic();
            ui.backgroundMusic.addEventListener('ended',game.playBackgroundMusic);   
        }
    };
    game.wumingBgp = function(){
        if(lib.config.ark_backgroundpicture) var bgp = lib.config.ark_backgroundpicture
        if(bgp && bgp != 'origin'){
            ui.background.setBackgroundImage('extension/无名/wumingBgp/'+bgp+'.png');
        }
        else{
            ui.background.setBackgroundImage('image/background/'+lib.config.image_background+'.jpg'); 
        }
    };
//放在主代码里
},precontent:function(){
    
},help:{},config:{"kzsm1":{"name":"<b><li>【扩展说明】</b>","clear":true},"kzsm2":{"name":"<li><font color=silver>[展开内容]</font>","init":"1","intro":"展开内容","item":{"1":"路过..","2":"<b>>><font color=#1E90FF>扩展说明</font>>>","3":"<li>本扩展为自己瞎几把玩的扩展，其中部分代码借鉴了群友模板和扩展</font>","4":"<li><b>甚至连这个展开内容也是！</font>","5":"<li>感谢水友提供的js代码帮助</font>","6":"<li>感谢谷歌提供的音频和图片素材</font>"}}},package:{
    character:{
        character:{
            "my_lianyishi":["female","shen",4,["chongzhen","refanghun","refuhan","bazhen","my_shenwei","wuming_tiandu"],["zhu","forbidai","des:我老婆！"]],
            "my_weigong":["male","shen","1/3",["xinliegong","relonghun","hunzi","juejing_wuming"],["zhu","forbidai","des:我要成为正义的伙伴！"]],
            "my_tosaka":["female","shen","1/5",["hunzi","wuming_shenzhu","julizhisheng"],["zhu","forbidai","des:还是我老婆！"]],
            "wuming_machao":["male","shen","4/5",["wuming_tieji","julizhisheng","machao_shengwei"],["zhu","des:棘手，怀念，摧毁一切！"]],
            "wuming_taoye":["male","shen",4,["olhunzi","olzhiba","buqu","界激昂"],["zhu","des:激昂起来！"]],
            "wuming_niemou":["male","shen",5,["tigahenshi"],["zhu","des:强大！"]],
            "wuming_liubei":["male","shu","3/4",["rerende","rejijiang","julizhisheng","new_wuhujiang"],["zhu","forbidai","des:昭烈千古"]],
            "wuming_meiluxing":["female","shen","4/9",["scfuhai","yingba","fushen"],["zhu","forbidai","des:我老婆哒！！"]],
            "wuming_meiluxingnew":["female","shen",4,["repojun","lidao","my_shenwei"],["zhu","forbidai","des:我老婆哒"]],
            "jie_weigong":["male","shen",4,["xianfu","zili","界权计","界筹策","wuming_tiandu"],["zhu","forbidai","des:第五次圣杯战争时由远坂凛召唤出的从者，职阶是Archer。作为英灵的基本能力偏低，主要靠Servant中出现的众多投影产物和自身的战斗经验来弥补差距。精于近身格斗战及弓术，亦擅长对魔术战和家务，本体为未来的卫宫士郎成为守护者后的姿态。"]],
            "wuming_artly":["female","shen","3/4",["oltiaoxin","xinleiji","xinguidao","wuming_fuwei"],["zhu","forbidai","des:发出了老婆的声音！"]],
            "wuming_guanyu":["male","shen",4,["wuming_wusheng","laopo_yijue","shuiyan","wuming_linglong"],["zhu","forbidai","des:威震华夏，武圣！"]],
            niuge:["male","shen",4,["henshi"],["zhu","forbidai","des:时间的王者！拥有自由操纵使时间停止，并只有自己才能自由行动的能力，heshin:Buggle Up！御天之骑！（Wow！）铭刻编年！此时此刻正乃极致之时！（Wow！）"]],
            "wuming_guailin":["female","shen",3,["aiguo","gusheng","shoudu","cijia"],["zhu","forbidai","des:在中国是中国人，在美国是美国人！"]],
            "re_weigong":["male","shen",4,["touying","shijian","wuxianjianzhi"],["zhu","forbidai","des:是正义的伙伴啊"]],
            mogeng:["female","shen",4,["lihun","rejuece","remieji","redangxian","wuming_fencheng"],["zhu","forbidai","des:短短三个字，我老婆！"]],
            Archetype:["female","shen",4,["xingxi","zhengzu","yueji"],["zhu","forbidai","des:我的新老婆！"]],
            Cronicle:["male","shen",4,["wuming_shiting","huisu"],["zhu","forbidai","unseen","des:卡面来打哒！"]],
            "wuming_zhugeliang":["male","shen",4,["wuming_guanxing","kongcheng","wuming_kanpo","wuming_huoji"],["zhu","des:出师一表真名世，千载谁堪伯仲间。"]],
            hypermitike:["male","shen",4,["mutieke","riderkick"],["zhu","forbidai","unseen","des:使用“极限全能X转玩卡带”配合“超级无敌转玩卡带”变身的最终形态。以“Gashacon键盘剑”为武器。拥有无敌的力量，可使一切攻击无力化。无限制的无敌时间，可使Cronus的Pause无效化。能在游戏领域内瞬移。后又加载了存档功能通过使用新能量道具“Save”对当前的战斗情况进行存档以对抗Cronus的Reset，亦能将能量道具“Save”借以他人使用。Level Up为此形态时的口令是“Hyper大变身”。  变身音效为“Bakkan！无敌！耀眼！犹如流星！黄金的最强玩家！Hyper Muteki Ex-Aid！”。"]],
            decade:["male","shen",4,["jiayu","decadekick"],["zhu","forbidai","unseen","des:路过的假面骑士"]],
            blade:["male","shen",4,["wuming_jianji","shanji","blade_chongsheng"],["zhu","forbidai","des:卡面来打blade"]],
            kugga:["male","shen",4,["cijia","jianming"],["zhu","forbidai","des:卡面来打kugga"]],
            king:["male","shen",4,["lianying","olpaoxiao","dihuang"],["zhu","forbidai","des:真的是帝皇嘛？？？"]],
            build:["male","shen",4,["wuming_yingyuan","jizhi","yihuan"],["zhu","forbidai","unseen","des:桐生战兔"]],
            faiz:["male","shen",4,["startup","maoshetou"],["zhu","forbidai","des:科技骑士"]],
            kingform:["male","shen",3,["wmjiandi","shenjian"],["zhu","forbidai","unseen","des:由假面骑士剑升级变身而来出现的帝皇剑"]],
            "wuming_huangzhong":["male","shen",4,["wuming_liegong"],["zhu","forbidai","des:界徐盛少时素有阴名，每遇犯疆者，必癫狂屠戮之，时人乃惧，盛亦颇以此自得。一日拜谒老将谋黄忠，辄语之，忠不改颜，盛乃惑而出。原此事者，乃忠经年历战，皆万军取首，一箭而下，竟不识何之谓癫狂屠戮也。后盛闻之大惭。"]],
            "decade_man":["male","shen",4,["luguo","decade_henshi"],["zhu","forbidai","des:路过的假面骑士，你给我记好了。"]],
            faizaccel:["male","shen",4,["clockup"],["zhu","forbidai","unseen","des:10s加速模式"]],
            "神·乔梁":["male","shen",1,["kezhi"],["zhu","forbidai"]],
            "shui_liquanqing":["male","shui",3,["liquanqing_sanyao","pofang"],["zhu","forbidai","des:睡姿可以"]],
            kabuto:["male","shen","3/4",["kabuto_clockup","castoff"],["zhu","forbidai","des:甲斗王"]],
        },
        translate:{
            "my_lianyishi":"两仪式",
            "my_weigong":"正義の味方",
            "my_tosaka":"远坂凛",
            "wuming_machao":"神•马超",
            "wuming_taoye":"神•陶冶",
            "wuming_niemou":"神•聂献坚",
            "wuming_liubei":"汉昭烈帝",
            "wuming_meiluxing":"美露莘",
            "wuming_meiluxingnew":"妖精骑士",
            "jie_weigong":"界正義の味方",
            "wuming_artly":"阿尔托莉雅",
            "wuming_guanyu":"神·关羽",
            niuge:"神·牛世豪",
            "wuming_guailin":"谷爱凌",
            "re_weigong":"卫宫士郎",
            mogeng:"摩根",
            Archetype:"爱尔奎特",
            Cronicle:"克洛诺斯",
            "wuming_zhugeliang":"神·卧龙",
            hypermitike:"无敌玩家",
            decade:"帝骑",
            blade:"剑",
            kugga:"空我",
            king:"帝皇",
            build:"创骑",
            faiz:"巧",
            kingform:"帝皇剑",
            "wuming_huangzhong":"神·黄忠",
            "decade_man":"王小明",
            faizaccel:"巧·加速",
            "神·乔梁":"神·乔梁",
            "shui_liquanqing":"李全庆",
            kabuto:"甲斗",
        },
    },
    card:{
        card:{
            "wuxing_xiangheshan":{
                audio:true,
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-3,
                },
                ai:{
                    basic:{
                        equipValue:2,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                skills:["wuming_wuxingshan"],
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
            },
        },
        translate:{
            "wuxing_xiangheshan":"五行鹤翎扇",
            "wuxing_xiangheshan_info":"当你声明使用不为神属性的【杀】时，你可将此【杀】的属性改为不为神属性的其他属性。",
        },
        list:[],
    },
    skill:{
        skill:{
            "界激昂":{
                shaRelated:true,
                audio:"jiang",
                preHidden:true,
                audioname:["sp_lvmeng","re_sunben","re_sunce"],
                trigger:{
                    player:"useCardToPlayered",
                    target:"useCardToTargeted",
                },
                filter:function(event,player){
        if(get.color(event.card)!= 'red' ) return false;
        return player==event.target||event.getParent().triggeredTargets3.length==1;
    },
                frequent:true,
                content:function(){
        player.draw();
    },
                ai:{
                    effect:{
                        target:function(card,player,target){
                if(get.color(card)=='red') return [1,0.6];
            },
                        player:function(card,player,target){
                if(get.color(card)=='red') return [1,1];
            },
                    },
                },
            },
            "界权计":{
                audio:"quanji",
                trigger:{
                    player:["damageEnd","phaseUseEnd"],
                },
                frequent:true,
                locked:false,
                notemp:true,
                filter:function(event,player){
        if(event.name=='phaseUse') return player.countCards('h')>player.hp;
        return event.num>0;
    },
                content:function(){
        "step 0"
        event.count=trigger.num||1;
        "step 1"
        event.count--;
        player.draw(2);
        "step 2"
        if(player.countCards('h')){
            player.chooseCard('将一张手牌置于武将牌上作为“权”',true);
        }
        else{
            event.goto(4);
        }
        "step 3"
        if(result.cards&&result.cards.length){
            player.addToExpansion(result.cards,player,'give').gaintag.add('quanji');
        }
        "step 4"
        if(event.count>0){
            player.chooseBool(get.prompt2('requanji')).set('frequentSkill','requanji');
        }
        else event.finish();
        "step 5"
        if(result.bool){
            player.logSkill('requanji');
            event.goto(1);
        }
    },
                mod:{
                    maxHandcard:function(player,num){
            return num+player.getExpansions('quanji').length*2;
        },
                },
                onremove:function(player,skill){
        var cards=player.getExpansions('quanji');
        if(cards.length) player.loseToDiscardpile(cards);
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    threaten:0.8,
                    effect:{
                        target:function(card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [0.5,get.tag(card,'damage')*2];
                    if(!target.hasSkill('paiyi')&&target.hp>1) return [0.5,get.tag(card,'damage')*1.5];
                    if(target.hp==3) return [0.5,get.tag(card,'damage')*1.5];
                    if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
                }
            },
                    },
                },
            },
            "界筹策":{
                trigger:{
                    player:"damageEnd",
                },
                content:function(){
        'step 0'
        event.num=trigger.num;
        'step 1'
        player.judge();
        'step 2'
        event.color=result.color;
        if(event.color=='black'){
            player.chooseTarget('弃置一名角色区域内的一张牌',function(card,player,target){
                return target.countCards('hej');
            }).set('ai',function(target){
                var player=_status.event.player;
                var att=get.attitude(player,target);
                if(att<0){
                    att=-Math.sqrt(-att);
                }
                else{
                    att=Math.sqrt(att);
                }
                return att*lib.card.guohe.ai.result.target(player,target);
            })
        }
        else{
            var next=player.chooseTarget('令一名角色摸两张牌');
            if(player.storage.xianfu2&&player.storage.xianfu2.length){
                next.set('prompt2','（若目标为'+get.translation(player.storage.xianfu2)+'则改为摸三张牌）');
            }
            next.set('ai',function(target){
                var player=_status.event.player;
                var att=get.attitude(player,target)/Math.sqrt(1+target.countCards('h'));
                if(target.hasSkillTag('nogain')) att/=10;
                if(player.storage.xianfu2&&player.storage.xianfu2.contains(target)) return att;
                return att;
            })
        }
        'step 3'
        if(result.bool){
            var target=result.targets[0];
            player.line(target,'green');
            if(event.color=='black'){
                player.discardPlayerCard(target,'hej',true);
            }
            else{
                if(player.storage.xianfu2&&player.storage.xianfu2.contains(target)){
                    if(!target.storage.xianfu_mark) target.storage.xianfu_mark=[];
                    target.storage.xianfu_mark.add(player);
                    target.storage.xianfu_mark.sortBySeat();
                    target.markSkill('xianfu_mark');
                    target.draw(3);
                }
                else{
                    target.draw(2);
                }
            }
        }
        'step 4'
        if(--event.num>0){
            player.chooseBool(get.prompt2('chouce'));
        }
        else{
            event.finish();
        }
        'step 5'
        if(result.bool){
            player.logSkill('chouce');
            event.goto(1);
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function(card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [1,get.tag(card,'damage')*1.5];
                    if(target.hp==3) return [1,get.tag(card,'damage')*1];
                    if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
                }
            },
                    },
                },
            },
            "my_shenwei":{
                audio:"llqshenwei",
                audioname:["heqi","sunce","gexuan","re_sunben","re_sunce","re_heqi"],
                trigger:{
                    player:"phaseDrawBegin2",
                },
                forced:true,
                preHidden:true,
                filter:function(event,player){
        return !event.numFixed;
    },
                content:function(){
        trigger.num+=2;
    },
                ai:{
                    threaten:1.5,
                },
                mod:{
                    cardUsable:function(card,player,num){
            if(card.name=='sha') return num+1;
        },
                    maxHandcard:(player,num)=>num+2,
                },
                "audioname2":{
                    "old_yuanshu":"weidi",
                },
            },
            fushen:{
                audio:"fuhan",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                unique:true,
                limited:true,
                skillAnimation:false,
                animationColor:"orange",
                forceunique:true,
                filter:function(event,player){
        return player.countMark('fanghun')>=0;
    },
                content:function(){
        'step 0'
        if(player.storage.fanghun) player.draw(player.storage.fanghun);
        player.removeMark('fanghun',player.storage.fanghun);
        player.awakenSkill('refuhan');
        'step 1'
        var list;
        if(_status.characterlist){
            list=[];
            for(var i=0;i<_status.characterlist.length;i++){
                var name=_status.characterlist[i];
                if(lib.character[name][1]=='shen') list.push(name);
            }
        }
        else if(_status.connectMode){
            list=get.charactersOL(function(i){
                return lib.character[i][1]!='shen';
            });
        }
        else{
            list=get.gainableCharacters(function(info){
                return info[1]=='shen';
            });
        }
        var players=game.players.concat(game.dead);
        list.push("my_lianyishi");
        list.push("my_tosaka");
        list.push("meiluxing");
        list.push("wuming_guanyu");
        list.push("wuming_artly");
        list.push("niuge");
        list.push("re_weigong");
        list=list.randomGets(14);
        var skills=[];
        for(var i of list){
            skills.addArray((lib.character[i][3]||[]).filter(function(skill){
                var info=get.info(skill);
                return info&&!info.zhuSkill&&!info.limited&&!info.juexingji&&!info.hiddenSkill&&!info.charlotte&&!info.dutySkill;
            }));
        }
        if(!list.length||!skills.length){event.finish();return;}
        if(player.isUnderControl()){
            game.swapPlayerAuto(player);
        }
        var switchToAuto=function(){
            _status.imchoosing=false;
            event._result={
                bool:true,
                skills:skills.randomGets(3),
            };
            if(event.dialog) event.dialog.close();
            if(event.control) event.control.close();
        };
        var chooseButton=function(list,skills){
            var event=_status.event;
            if(!event._result) event._result={};
            event._result.skills=[];
            var rSkill=event._result.skills;
            var dialog=ui.create.dialog('请选择获得至多三个技能',[list,'character'],'hidden');
            event.dialog=dialog;
            var table=document.createElement('div');
            table.classList.add('add-setting');
            table.style.margin='0';
            table.style.width='100%';
            table.style.position='relative';
            for(var i=0;i<skills.length;i++){
                var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                td.link=skills[i];
                table.appendChild(td);
                td.innerHTML='<span>'+get.translation(skills[i])+'</span>';
                td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
                    if(_status.dragged) return;
                    if(_status.justdragged) return;
                    _status.tempNoButton=true;
                    setTimeout(function(){
                        _status.tempNoButton=false;
                    },500);
                    var link=this.link;
                    if(!this.classList.contains('bluebg')){
                        if(rSkill.length>=3) return;
                        rSkill.add(link);
                        this.classList.add('bluebg');
                    }
                    else{
                        this.classList.remove('bluebg');
                        rSkill.remove(link);
                    }
                });
            }
            dialog.content.appendChild(table);
            dialog.add('　　');
            dialog.open();
            
            event.switchToAuto=function(){
                event.dialog.close();
                event.control.close();
                game.resume();
                _status.imchoosing=false;
            };
            event.control=ui.create.control('ok',function(link){
                event.dialog.close();
                event.control.close();
                game.resume();
                _status.imchoosing=false;
            });
            for(var i=0;i<event.dialog.buttons.length;i++){
                event.dialog.buttons[i].classList.add('selectable');
            }
            game.pause();
            game.countChoose();
        };
        if(event.isMine()){
            chooseButton(list,skills);
        }
        else if(event.isOnline()){
            event.player.send(chooseButton,list,skills);
            event.player.wait();
            game.pause();
        }
        else{
            switchToAuto();
        }
        'step 2'
        var map=event.result||result;
        if(map&&map.skills&&map.skills.length){
            for(var i of map.skills) player.addSkillLog(i);
        }
        game.broadcastAll(function(list){
            game.expandSkills(list);
            for(var i of list){
                var info=lib.skill[i];
                if(!info) continue;
                if(!info.audioname2) info.audioname2={};
                info.audioname2.old_yuanshu='weidi';
            }
        },map.skills);
        'step 3'
        if(player.isMinHp()) player.recover();
        player.removeSkill("fushen");
    },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
            },
            lidao:{
                audio:"repojun",
                audioname:["re_sp_zhugeliang","ol_sp_zhugeliang","ol_pangtong"],
                mod:{
                    targetInRange:function(card,player,target){
            if(card.name=='sha' && get.distance(player,target) <= 2) return true;
        },
                },
                group:"guding_skill",
                locked:true,
            },
            "juejing_wuming":{
                mod:{
                    maxHandcard:function(player,num){
            return 3+num;
        },
                },
                audio:"xinjuejing",
                trigger:{
                    player:["dying","dyingAfter","damageBefore"],
                },
                forced:true,
                content:function(){
        player.draw();
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function(card,player,target){
                if(get.tag(card,'damage')){
         //           if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    var num=1;
                    if(target.hp>=1) return [1,num*2];
                }
            },
                    },
                },
            },
            "laopo_yijue":{
                audio:"yijue",
                enable:"phaseUse",
                usable:1,
                position:"he",
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
                filterCard:true,
                check:function (card){
        return 8-get.value(card);
    },
                content:function (){
        "step 0"
        target.chooseCard(true).ai=function(card){
            var player=_status.event.player;
            if((player.hasShan()||player.hp<3)&&get.color(card)=='black') return 0.5;
            return Math.max(1,20-get.value(card));
        };
        "step 1"
        target.showCards(result.cards);
        event.card2=result.cards[0];
        if(get.color(event.card2)=='black'){
            if(!target.hasSkill('baiban')){
                target.addTempSkill('baiban');
            }
            target.addTempSkill('wuming_yijue');
            event.finish();
        }
        else{
            if(!target.hasSkill('baiban')){
                target.addTempSkill('baiban');
            }
            player.gain(event.card2,target,'give','bySelf');
            if(target.hp<target.maxHp){
                player.chooseBool('是否让目标回复一点体力？').ai=function(event,player){
                    return get.recoverEffect(target,player,player)>0;
                };
            }
        }
        "step 2"
        if(result.bool){
            target.recover();
        }
        player.draw();
    },
                ai:{
                    result:{
                        target:function(player,target){
                var hs=player.getCards('h');
                if(hs.length<3) return 0;
                if(target.countCards('h')>target.hp+1&&get.recoverEffect(target)>0){
                    return 1;
                }
                if(player.canUse('sha',target)&&(player.countCards('h','sha')||player.countCards('he',{color:'red'}))){
                    return -2;
                }
                return -0.5;
            },
                    },
                    order:9,
                    "directHit_ai":true,
                    skillTagFilter:function(player,tag,arg){
            if(!arg.target.hasSkillTag('new_yijue2')) return false;
        },
                },
            },
            "wuming_shenzhu":{
                audio:"shenzhu",
                trigger:{
                    player:"useCardAfter",
                },
                forced:true,
                filter:function(event,player){
        return event.card.name=='sha'&&event.card.isCard&&event.cards.length==1;
    },
                content:function(){
        'step 0'
        player.chooseControl().set('choiceList',[
            '摸一张牌，且本回合使用【杀】的次数上限+1',
            '摸五张牌，且本回合不能再使用【杀】,本轮手牌上限+3',
        ]).set('ai',()=>_status.event.player.hasSha()?0:1);
        'step 1'
        if(result.index==0){
            player.draw();
            player.addTempSkill('shenzhu_more');
            player.addMark('shenzhu_more',1,false);
        }
        else{
            player.draw(5);
            player.addTempSkill('sub_shengyu');            
            player.addTempSkill('shenzhu_less');
        }
    },
                subSkill:{
                    more:{
                        charlotte:true,
                        onremove:true,
                        mod:{
                            cardUsable:function(card,player,num){
                    if(card.name=='sha') return num+player.countMark('shenzhu_more');
                },
                        },
                        sub:true,
                    },
                    less:{
                        charlotte:true,
                        mod:{
                            cardEnabled:function(card){
                    if(card.name=='sha') return false;
                },
                        },
                        sub:true,
                    },
                },
                "audioname2":{
                    "old_yuanshu":"weidi",
                },
            },
            "sub_shengyu":{
                sub:true,
                silent:true,
                popup:false,
                forced:true,
                mark:true,
                mod:{
                    maxHandcard:(player,num)=>num+3,
                },
            },
            wuhujiang:{
                audio:"nzry_longnu",
                enable:"phaseUse",
                usable:1,
                derivation:"wushuang",
                filterCard:false,
                position:"he",
                content:function(){
        'step 0'
        player.chooseTarget(lib.filter.notMe,get.prompt('wuhujiang'),'令一名其他角色选择获得〖咆哮〗或〖烈弓〗与〖龙胆〗').set('ai',function(target){
            return get.attitude(_status.event.player,target)
        }).set('forceDie',true);
        'step 1'
        player.$fullscreenpop('五虎上将旗','fire',true);
        var target=result.targets[0];
        event.target=result.targets[0];
        player.logSkill('wuhujiang',target);
        target.chooseControl(true).set('choiceList',[
            '你获得【咆哮】，并摸3张牌。',
            '你获得【龙胆】，【烈弓】。',
        ]).set('ai',()=>_status.event.player.hasSha()?0:1);
        'step 2'
        if(result.index==0){
            event.target.draw(3);
            event.target.addTempSkill('paoxiao',{player:'phaseAfter'});
        }
        else{
            event.target.addTempSkill('xinliegong',{player:'phaseAfter'});
            event.target.addTempSkill('ollongdan',{player:'phaseAfter'});
        }
        'step 3'
        list=['retieji','new_rewusheng','paoxiao','xinliegong','ollongdan'];
        list=list.randomGets(2);
        for(var i of list){
              player.addTempSkill(i,{player:'phaseAfter'});    
         }
    },
            },
            julizhisheng:{
                mod:{
                    canBeDiscarded:function(card){
        if(get.position(card)=='e'&&['equip2','equip3'].contains(get.subtype(card)))                               return false;
        },
                    globalTo:function(from,to,distance){
            return distance+1;
        },
                    globalFrom:function(from,to,distance){
            return distance-1;
        },
                },
            },
            "wuming_tieji":{
                shaRelated:true,
                audio:"retieji",
                trigger:{
                    player:"useCardToPlayered",
                },
                check:function(event,player){
        return get.attitude(player,event.target)<=0;
    },
                filter:function(event,player){
        return event.card.name=='sha';
    },
                logTarget:"target",
                content:function(){
        "step 0"
        player.judge(function(){return 0});
        if(!trigger.target.hasSkill('fengyin')){
            trigger.target.addTempSkill('fengyin',{player:'phaseAfter'});
        }
        "step 1"
        var suit=result.suit;
        var target=trigger.target;
        var num=target.countCards('h','shan');
        target.chooseToDiscard('请弃置一张'+get.translation(suit)+'牌，否则不能使用闪抵消此杀','he',function(card){
            return get.suit(card)==_status.event.suit;
        }).set('ai',function(card){
            var num=_status.event.num;
            if(num==0) return 0;
            if(card.name=='shan') return num>1?2:0;
            return 8-get.value(card);
        }).set('num',num).set('suit',suit);
        "step 2"
        if(!result.bool){
            trigger.getParent().directHit.add(trigger.target);
        }
    },
                ai:{
                    ignoreSkill:true,
                    skillTagFilter:function(player,tag,arg){
            if(tag=='directHit_ai'){
                return get.attitude(player,arg.target)<=0;
            }
            if(!arg||arg.isLink||!arg.card||arg.card.name!='sha') return false;
            if(!arg.target||get.attitude(player,arg.target)>=0) return false;
            if(!arg.skill||!lib.skill[arg.skill]||lib.skill[arg.skill].charlotte||get.is.locked(arg.skill)||!arg.target.getSkills(true,false).contains(arg.skill)) return false;
        },
                    "directHit_ai":true,
                },
            },
            "machao_shengwei":{
                audio:"retieji",
                enable:"phaseUse",
                usable:1,
                filterTarget:function(card,player,target){
        return player.canCompare(target);
    },
                filter:function(event,player){
        return player.countCards('h')>0;
    },
                content:function(){
        'step 0'
        player.chooseToCompare(target).set('preserve','win');
        player.addTempSkill('unequip'); 
        'step 1'
        if(result.bool&&result.target){
            event.type=false;
            player.chooseUseTarget({name:'sha'},'是否视为使用一张【杀】？',false,'nodistance');
            player.draw(3);
        }
        else{
            event.type=true;
            target.draw(3);
            player.draw(3);
            player.addTempSkill('sub_shengyu');
            player.addTempSkill('shenzhu_less');
        }            
    },
                ai:{
                    result:{
                        target:function(player,target){
                var hs=player.getCards('h');
                if(hs.length<3) return 0;
                var bool=false;
                for(var i=0;i<hs.length;i++){
                    if(hs[i].number>=9&&get.value(hs[i])<7){
                        bool=true;
                        break;
                    }
                }
                if(!bool) return 0;
                if(player.canUse('sha',target)&&(player.countCards('h','sha'))){
                    return -2;
                }
                return -0.5;
            },
                    },
                    order:9,
                },
                "audioname2":{
                    "old_yuanshu":"weidi",
                },
            },
            "new_wuhujiang":{
                audio:"ext:国战补充③:1",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                frequent:true,
                preHidden:true,
                content:function(){
       "step 0"
        player.judge();
        "step 1"
        if (result.color == "red")
            player.addTempSkill("wuhujiang",{player:'phaseAfter'});
        else{
            player.draw(3);
            player.addTempSkill("sub_shengyu");
        }
    },
            },
            "wuming_tiandu":{
                audio:"tiandu",
                audioname:["re_guojia","xizhicai","gz_nagisa"],
                trigger:{
                    player:"judgeEnd",
                },
                preHidden:true,
                frequent:function(event){
        if(event.result.card.name=='du') return false;
        //if(get.mode()=='guozhan') return false;
        return true;
    },
                check:function(event){
        if(event.result.card.name=='du') return false;
        return true;
    },
                filter:function(event,player){
        return get.position(event.result.card,true)=='o';
    },
                content:function(){
        player.gain(trigger.result.card,'gain2');
        player.draw();
    },
            },
            "wuming_fuwei":{
                audio:"fuhan",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                unique:true,
                limited:true,
                skillAnimation:false,
                animationColor:"orange",
                forceunique:true,
                filter:function(event,player){
        return player.countMark('fanghun')>=0;
    },
                content:function(){
        'step 0'
        if(player.storage.fanghun) player.draw(player.storage.fanghun);
        player.removeMark('fanghun',player.storage.fanghun);
        player.awakenSkill('refuhan');
        'step 1'
        var list;
        if(_status.characterlist){
            list=[];
            for(var i=0;i<_status.characterlist.length;i++){
                var name=_status.characterlist[i];
                if(lib.character[name][1]=='wei') list.push(name);
            }
        }
        else if(_status.connectMode){
            list=get.charactersOL(function(i){
                return lib.character[i][1]!='wei';
            });
        }
        else{
            list=get.gainableCharacters(function(info){
                return info[1]=='wei';
            });
        }
        var players=game.players.concat(game.dead);
        for(var i=0;i<players.length;i++){
            list.remove(players[i].name);
            list.remove(players[i].name1);
            list.remove(players[i].name2);
        }
        list=list.randomGets(Math.max(6,game.countPlayer()+3));
        var skills=[];
        for(var i of list){
            skills.addArray((lib.character[i][3]||[]).filter(function(skill){
                var info=get.info(skill);
                return info&&!info.zhuSkill&&!info.limited&&!info.juexingji&&!info.hiddenSkill&&!info.charlotte&&!info.dutySkill;
            }));
        }
        if(!list.length||!skills.length){event.finish();return;}
        if(player.isUnderControl()){
            game.swapPlayerAuto(player);
        }
        var switchToAuto=function(){
            _status.imchoosing=false;
            event._result={
                bool:true,
                skills:skills.randomGets(3),
            };
            if(event.dialog) event.dialog.close();
            if(event.control) event.control.close();
        };
        var chooseButton=function(list,skills){
            var event=_status.event;
            if(!event._result) event._result={};
            event._result.skills=[];
            var rSkill=event._result.skills;
            var dialog=ui.create.dialog('请选择获得至多三个技能',[list,'character'],'hidden');
            event.dialog=dialog;
            var table=document.createElement('div');
            table.classList.add('add-setting');
            table.style.margin='0';
            table.style.width='100%';
            table.style.position='relative';
            for(var i=0;i<skills.length;i++){
                var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                td.link=skills[i];
                table.appendChild(td);
                td.innerHTML='<span>'+get.translation(skills[i])+'</span>';
                td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
                    if(_status.dragged) return;
                    if(_status.justdragged) return;
                    _status.tempNoButton=true;
                    setTimeout(function(){
                        _status.tempNoButton=false;
                    },500);
                    var link=this.link;
                    if(!this.classList.contains('bluebg')){
                        if(rSkill.length>=3) return;
                        rSkill.add(link);
                        this.classList.add('bluebg');
                    }
                    else{
                        this.classList.remove('bluebg');
                        rSkill.remove(link);
                    }
                });
            }
            dialog.content.appendChild(table);
            dialog.add('　　');
            dialog.open();
            
            event.switchToAuto=function(){
                event.dialog.close();
                event.control.close();
                game.resume();
                _status.imchoosing=false;
            };
            event.control=ui.create.control('ok',function(link){
                event.dialog.close();
                event.control.close();
                game.resume();
                _status.imchoosing=false;
            });
            for(var i=0;i<event.dialog.buttons.length;i++){
                event.dialog.buttons[i].classList.add('selectable');
            }
            game.pause();
            game.countChoose();
        };
        if(event.isMine()){
            chooseButton(list,skills);
        }
        else if(event.isOnline()){
            event.player.send(chooseButton,list,skills);
            event.player.wait();
            game.pause();
        }
        else{
            switchToAuto();
        }
        'step 2'
        var map=event.result||result;
        if(map&&map.skills&&map.skills.length){
            for(var i of map.skills) player.addSkillLog(i);
        }
        game.broadcastAll(function(list){
            game.expandSkills(list);
            for(var i of list){
                var info=lib.skill[i];
                if(!info) continue;
                if(!info.audioname2) info.audioname2={};
                info.audioname2.old_yuanshu='weidi';
            }
        },map.skills);
        'step 3'
        if(player.isMinHp()) player.recover();
        player.removeSkill("wuming_fuwei");
    },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
            },
            "wuming_yijue":{
                trigger:{
                    player:"damageBegin1",
                },
                filter:function(event){
        return event.source&&event.source.hasSkill('laopo_yijue')&&event.card&&event.card.name=='sha';
    },
                silent:true,
                popup:false,
                forced:true,
                content:function(){
        trigger.num++;
    },
                mark:true,
                mod:{
                    "cardEnabled2":function(card){
            if(get.position(card)=='h') return false;
        },
                },
                intro:{
                    content:"不能使用或打出手牌，受到杀伤害+1",
                },
            },
            shuiyan:{
                audio:"wusheng",
                enable:"phaseUse",
                usable:1,
                filterCard:1,
                position:"he",
                content:function(){
        player.chooseUseTarget({name:'shuiyanqijunx'},'是否视为使用一张【水淹七军】？',false,'nodistance');
    },
                ai:{
                    order:8,
                    result:{
                        player:1,
                    },
                },
            },
            "wuming_wusheng":{
                mod:{
                    targetInRange:function (card){
            if(get.suit(card)=='diamond'&&card.name=='sha') return true;
        },
                    selectTarget:function(card,player,range){
            if(card.name=='sha'&&range[1]!=-1&&get.suit(card)=='club'){
                range[1]++;
            }
        },
                },
                locked:false,
                audio:"wusheng",
                audioname:["re_guanyu","guanzhang","jsp_guanyu","guansuo"],
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function(card,player){
        if(get.zhu(player,'shouyue')) return true;
        return true;
    },
                position:"hes",
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function(player){
        if(get.zhu(player,'shouyue')){
            if(!player.countCards('hes')) return false;
        }
        else{
            if(!player.countCards('hes',{color:'red'})) return false;
        }
    },
                prompt:"将任意一张牌当杀使用或打出，你的♦杀无视距离,♣杀额外选择目标,♥杀伤害+1,♠杀无法响应",
                check:function(card){
        var val=get.value(card);
        if(_status.event.name=='chooseToRespond') return 1/Math.max(0.1,val);
        return 5-val;
    },
                group:["wuming_wushengnew","wuming_wusheng3"],
                ai:{
                    respondSha:true,
                    skillTagFilter:function(player){
            if(get.zhu(player,'shouyue')){
                if(!player.countCards('hes')) return false;
            }
            else{
                if(!player.countCards('hes',{color:'red'})) return false;
            }
        },
                    yingbian:function(card,player,targets,viewer){
            if(get.attitude(viewer,player)<=0) return 0;
            var base=0,hit=false;
            if(get.cardtag(card,'yingbian_hit')){
                hit=true;
                if(targets.filter(function(target){
                    return target.hasShan()&&get.attitude(viewer,target)<0&&get.damageEffect(target,player,viewer,get.nature(card))>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_all')){
                if(game.hasPlayer(function(current){
                    return !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_damage')){
                if(targets.filter(function(target){
                    return get.attitude(player,target)<0&&(hit||!target.mayHaveShan()||player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                    },true))&&!target.hasSkillTag('filterDamage',null,{
                        player:player,
                        card:card,
                        jiu:true,
                    })
                })) base+=5;
            }
            return base;
        },
                    canLink:function(player,target,card){
            if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
            if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
            },true)) return false;
            if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
            return true;
        },
                    basic:{
                        useful:[5,3,1],
                        value:[5,3,1],
                    },
                    order:function(item,player){
            if(player.hasSkillTag('presha',true,null,true)) return 10;
            if(lib.linked.contains(get.nature(item))){
                if(game.hasPlayer(function(current){
                    return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                })&&game.countPlayer(function(current){
                    return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                })>1) return 3.1;
                return 3;
            }
            return 3.05;
        },
                    result:{
                        target:function(player,target,card,isLink){
                var eff=function(){
                    if(!isLink&&player.hasSkill('jiu')){
                        if(!target.hasSkillTag('filterDamage',null,{
                            player:player,
                            card:card,
                            jiu:true,
                        })){
                            if(get.attitude(player,target)>0){
                                return -7;
                            }
                            else{
                                return -4;
                            }
                        }
                        return -0.5;
                    }
                    return -1.5;
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)) return eff/1.2;
                return eff;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function(card){
                if(card.nature=='poison') return;
                return 1;
            },
                        natureDamage:function(card){
                if(card.nature) return 1;
            },
                        fireDamage:function(card,nature){
                if(card.nature=='fire') return 1;
            },
                        thunderDamage:function(card,nature){
                if(card.nature=='thunder') return 1;
            },
                        poisonDamage:function(card,nature){
                if(card.nature=='poison') return 1;
            },
                    },
                },
            },
            "wuming_wushengnew":{
                trigger:{
                    player:"useCard",
                },
                forced:true,
                popup:false,
                filter:function(event){
        var evt=event;
        if(evt.card.suit == 'heart' && evt.card.name == 'sha')
            return true;
    },
                content:function(){
        trigger.baseDamage++;
    },
                sub:true,
            },
            "wuming_wusheng3":{
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function(event,player){
        if(event.card.suit == 'spade' && event.card.name == 'sha') 
            return true;
        return false;
    },
                content:function(){
        trigger.directHit=true;
    },
                sub:true,
            },
            "wuming_linglong":{
                trigger:{
                    target:"useCardToTargeted",
                },
                filter:function(event,player){
        if(event.targets&&event.targets.length>1||event.player==player) return false;
        if(player.hasSkillTag('unequip2')) return false;
        var evt=event.getParent();
        if(evt.player&&evt.player.hasSkillTag('unequip',false,{
            name:evt.card?evt.card.name:null,
            target:player,
            card:evt.card
        })) return false;
        return true;
    },
                audio:"ext:无名:2",
                check:function(event,player){
        return get.effect(player,event.card,event.player,player)<=0;
    },
                content:function(){
        "step 0"
        player.judge('linglongshimandai',function(card){return (get.suit(card)=='heart')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
            trigger.getParent().excluded.add(player);
        }
        "step 2"
        player.draw();
    },
                ai:{
                    effect:{
                        target:function(card,player,target,effect){
                if(player.hasSkillTag('unequip',false,{
                    name:card?card.name:null,
                    target:player,
                    card:card
                })) return;
            },
                    },
                },
            },
            "wuming_shiting":{
                audio:"ext:无名:2",
                enable:"phaseUse",
                usable:1,
                filterCard:false,
                contentBefore:function (){
        game.playwuming("时停音效");//这里写音效名字
        game[otherFunction[8]](game.wumingGif('时停动画.gif',null,null,true),3500);
    },
                content:function(){
        'step 0'
        var list=game.filterPlayer(function(current){
            return current!=player;
        });
        list.sortBySeat();
        event.targets=list;
        'step 1'
        var target=targets.shift();
        event.target=target;
        'step 2'
        if(target.isAlive()) target.addTempSkill('niuege_shijie');
        if(targets.length) event.goto(1);
        'step 3'
        player.addTempSkill('niugeshijieour');
    },
                ai:{
                    order:8,
                    result:{
                        player:1,
                    },
                    "directHit_ai":true,
                    skillTagFilter:function(player,tag,arg){
            return arg.target.hasSkill('niuege_shijie');
        },
                },
            },
            "niuege_shijie":{
                init:function(player,skill){
        player.addSkillBlocker(skill);
    },
                onremove:function(player,skill){
        player.removeSkillBlocker(skill);
    },
                charlotte:true,
                skillBlocker:function(skill,player){
        return !lib.skill[skill].charlotte;
    },
                mark:true,
                intro:{
                    name:"时停完了",
                    content:"时间已然停止，无法做出行动",
                },
                mod:{
                    "cardEnabled2":function(card){
            return false;
        },
                },
            },
            niugeshijieour:{
                mod:{
                    targetInRange:function(card,player,target){
            if(target.hasSkill('niuege_shijie')){
                return true;
            }
        },
                },
                charlotte:true,
            },
            huisu:{
                audio:"ext:无名:2",
                unique:true,
                group:["wuming_huisu","wuming_huisu2"],
                video:function(player,data){
        for(var i in data){
            var current=game.playerMap[i];
            current.node.handcards1.innerHTML='';
            current.node.handcards2.innerHTML='';
            current.node.equips.innerHTML='';
            current.node.judges.innerHTML='';
            current.directgain(get.infoCards(data[i].h));
            var es=get.infoCards(data[i].e);
            for(var j=0;j<es.length;j++){
                current.$equip(es[j]);
            }
            var js=get.infoCards(data[i].j);
            for(var j=0;j<js.length;j++){
                current.node.judges.appendChild(js[j]);
            }
        }
    },
            },
            "wuming_huisu2":{
                trigger:{
                    player:"phaseAfter",
                },
                silent:true,
                content:function(){
        var handcards1,handcards2,judges,equips,viewAs,i,j;
        player.storage.kunlunjing=[];
        player.storage.kunlunjing2=player.hp;

        for(i=0;i<game.players.length;i++){
            viewAs=[];
            handcards1=[];
            handcards2=[];
            judges=[];
            equips=[];

            for(j=0;j<game.players[i].node.handcards1.childNodes.length;j++)
                handcards1.push(game.players[i].node.handcards1.childNodes[j]);

            for(j=0;j<game.players[i].node.handcards2.childNodes.length;j++)
                handcards2.push(game.players[i].node.handcards2.childNodes[j]);

            for(j=0;j<game.players[i].node.judges.childNodes.length;j++){
                viewAs.push(game.players[i].node.judges.childNodes[j].viewAs);
                judges.push(game.players[i].node.judges.childNodes[j]);
            }

            for(j=0;j<game.players[i].node.equips.childNodes.length;j++)
                equips.push(game.players[i].node.equips.childNodes[j]);

            player.storage.kunlunjing.push({
                player:game.players[i],
                handcards1:handcards1,
                handcards2:handcards2,
                judges:judges,
                equips:equips,
                viewAs:viewAs,
                value:handcards1.length+handcards2.length+equips.length-judges.length
            });
        }
    },
                forced:true,
                popup:false,
            },
            "wuming_huisu":{
                trigger:{
                    player:"phaseBegin",
                },
                audio:"ext:无名:2",
                priority:10,
                prompt:"你可以将场上所有人的牌回溯到上一个回合，你回复至上个回合的体力值并扣除一滴体力上限",
                filter:function(event,player){
        if(!player.storage.kunlunjing) return false;
        return player.hp<player.storage.kunlunjing2;
    },
                onremove:["huisu","wuming_huisu2"],
                check:function(event,player){
        if(get.is.altered('kunlunjing')) return false;
        var storage=player.storage.kunlunjing;
        var num=0;
        for(var i=0;i<storage.length;i++){
            if(game.players.contains(storage[i].player)){
                var att=get.attitude(player,storage[i].player);
                var num2=storage[i].value-storage[i].player.countCards('he')+storage[i].player.countCards('j');
                if(att>0){
                    num+=num2;
                }
                else if(att<0){
                    num-=num2;
                }
            }
        }
        return num>Math.min(2,game.players.length/2);
    },
                content:function(){
        "step 0"
        game.delay(1);
        "step 1"
        game.animate.window(1);
        "step 2"
        var storage=event.player.storage.kunlunjing;
        for(var i=0;i<storage.length;i++){
            var player=storage[i].player;
            if(player.isAlive()){
                var cards=player.getCards('hej');
                for(var j=0;j<cards.length;j++){
                    cards[j].discard();
                }
                player.removeEquipTrigger();
            }
        }
        "step 3"
        var storage=event.player.storage.kunlunjing;
        var player;
        var i,j;
        for(i=0;i<storage.length;i++){
            player=storage[i].player;
            if(player.isAlive()){
                for(j=0;j<storage[i].handcards1.length;j++){
                    if(storage[i].handcards1[j].parentNode==ui.discardPile||
                        storage[i].handcards1[j].parentNode==ui.cardPile){
                        player.node.handcards1.appendChild(storage[i].handcards1[j]);
                    }
                    else{
                        player.node.handcards1.appendChild(game.createCard(storage[i].handcards1[j]));
                    }
                }
                for(j=0;j<storage[i].handcards2.length;j++){
                    if(storage[i].handcards2[j].parentNode==ui.discardPile||
                                             storage[i].handcards2[j].parentNode==ui.cardPile){
                        player.node.handcards2.appendChild(storage[i].handcards2[j]);
                    }
                    else{
                        player.node.handcards2.appendChild(game.createCard(storage[i].handcards2[j]));
                    }
                }
                for(j=0;j<storage[i].equips.length;j++){
                    if(storage[i].equips[j].parentNode==ui.discardPile||
                                             storage[i].equips[j].parentNode==ui.cardPile){
                        storage[i].equips[j].style.transform='';
                        player.$equip(storage[i].equips[j]);
                    }
                    else{
                        player.$equip(game.createCard(storage[i].equips[j]));
                    }
                }
                for(j=0;j<storage[i].judges.length;j++){
                    if(storage[i].judges[j].parentNode==ui.discardPile||
                        storage[i].judges[j].parentNode==ui.cardPile){
                        storage[i].judges[j].style.transform='';
                        storage[i].judges[j].viewAs=storage[i].viewAs[j];
                        if(storage[i].judges[j].viewAs&&storage[i].judges[j].viewAs!=storage[i].judges[j].name&&storage[i].judges[j].classList.contains('fullskin')){
                            storage[i].judges[j].classList.add('fakejudge');
                            storage[i].judges[j].node.background.innerHTML=lib.translate[storage[i].judges[j].viewAs+'_bg']||get.translation(storage[i].judges[j].viewAs)[0]
                        }
                        player.node.judges.appendChild(storage[i].judges[j]);
                    }
                }
                player.update();
            }
        }
        var data={};
        for(var i=0;i<game.players.length;i++){
            data[game.players[i].dataset.position]={
                h:get.cardsInfo(game.players[i].getCards('h')),
                e:get.cardsInfo(game.players[i].getCards('e')),
                j:get.cardsInfo(game.players[i].getCards('j'))
            }
        }
        game.addVideo('skill',event.player,['huisu',data]);
        game.animate.window(2);
        ui.updatehl();
        "step 4"
        if(get.is.altered('huisu')){
            player.loseHp();
        }
        "step 5"
        var re = player.storage.kunlunjing2-player.hp;
        if(re > 0){
            player.recover(re);
        }
        "step 6"
        player.$fullscreenpop('我才是世界的法则！','wood');
 //       player.loseMaxHp();
    },
            },
            aiguo:{
                trigger:{
                    player:["phaseBegin","phaseJieshuBegin"],
                },
                audio:"ext:无名:2",
                priority:10,
                prompt:"你可以自由选择国籍",
                filter:false,
                content:function(){
        'step 0'
        player.chooseControl('魏','蜀','吴','群').set().set('ai',()=>_status.event.player.hasSha()?0:1);
        'step 1'
        if(result.index==0){
            player.changeGroup('wei');
        }
        else if(result.index==1){
            player.changeGroup('shu');
        }
        else if(result.index==2)
            player.changeGroup('wu');        
        else
            player.changeGroup('qun')
    },
            },
            gusheng:{
                audio:"ext:无名:2",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                frequent:true,
                filter:false,
                content:function(){
        'step 0'
        var list=game.filterPlayer(function(current){
            return current!=player;
        });
        list.sortBySeat();
        event.targets=list;
        event.number = 0;
        'step 1'
        var target=targets.shift();
        event.target=target;
        'step 2'
        if(target.group == player.group) event.number++;
        if(targets.length) event.goto(1);
        'step 3'
        player.draw(event.number);
    },
            },
            shoudu:{
                audio:"kunfen",
                trigger:{
                    player:"damageBegin3",
                    source:"damageBegin1",
                },
                forced:true,
                filter:function (event, player) {
        if (event.source == undefined) return false;
        else if(event.source == player && event.source.group != player.group)
            return true;
        else if(event.source != player && event.source.group == player.group)
            return true;
        else
            return false;
    },
                content:function () {
        trigger.num++;
    },
            },
            duanzao:{
                audio:"ext:无名:2",
                enable:"phaseUse",
                position:"he",
                usable:2,
                filterCard:function(card){
        var type=get.type(card);
        if(type != 'basic') return true;
    },
                content:function () {
        'step 0'
        var card = get.cards();
        'step 1'
        var cards = lib.skill.duanzao.getEquip();
        player.chooseButton(['选择获得一件神兵：', [cards, 'vcard']], true);
        'step 2'
        if (result.bool) {
            var cardNum = Math.ceil(Math.random() * 13);
            event.card = game.createCard(result.links[0][2], lib.card[result.links[0][2]].suit, cardNum);
            event.card.shengong = true;
            player.chooseTarget('选择将' + get.translation(event.equip) + '置入谁的装备区：').ai = (target) => get.attitude(player, target);
        }
        'step 3'
        if (result.bool) {
            result.targets[0].equip(event.card);
        }
    },
                group:["duanzao_destory"],
                ai:{
                    order:10,
                    result:{
                        player:1,
                    },
                },
                getEquip:function () {
                var list = ['bintieshuangji', 'wushuangfangtianji', 'guilongzhanyuedao', 'chixueqingfeng', 'wutiesuolian', 'wuxing_xiangheshan','duanjian','yitianjian','yajiaoqiang','chiyanzhenhunqin',
                    'pyzhuren_shandian','pyzhuren_diamond','pyzhuren_spade','pyzhuren_heart','pyzhuren_club','wufengjian','gx_lingbaoxianhu','gx_taijifuchen','jinwuluori','xingtian','xiuluo',
                    'guofengyupao', 'qimenbagua', 'linglongshimandai', 'hongmianbaihuapao', 'huxinjing', 'heiguangkai','taipingyaoshu','tengjia','yinfengjia',
                    'shufazijinguan', 'xuwangzhimian', 'sanlue', 'zhaogujing', 'tianjitu', 'taigongyinfu','tongque',
                    'yonglv',
            ];
        return list;
    },
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
            },
            shijian:{
                mod:{
                    attackFrom:function(from,to,distance){
            return -Infinity;
        },
                },
                group:["yingtong"],
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
            },
            "duanzao_destory":{
                trigger:{
                    global:["loseEnd","cardsDiscardEnd"],
                },
                forced:true,
                charlotte:true,
                filter:function (event, player) {
        var cs = event.cards;
        for (var i = 0; i < cs.length; i++) {
            if (cs[i].shengong && get.position(cs[i], true) == 'd') return true;
        }
        return false;
    },
                forceDie:true,
                content:function () {
        var list = [];
        var cs = trigger.cards;
        for (var i = 0; i < cs.length; i++) {
            if (cs[i].shengong && get.position(cs[i], true) == 'd') {
                list.push(cs[i]);
            }
        }
        game.log(list, '被销毁了');
        game.cardsGotoSpecial(list);
    },
                sub:true,
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
            },
            "wuming_wuxingshan":{
                equipSkill:true,
                trigger:{
                    player:"useCard1",
                },
                filter:function(event,player){
        return (event.card.name=='sha');
    },
                audio:"ext:无名:true",
                direct:true,
                content:function(){
        'step 0'
        var list=lib.linked.slice(0);
        list.remove('kami');
        list.remove(trigger.card.nature);
        list.push('cancel2');
        player.chooseControl(list).set('prompt',get.prompt('wuxinghelingshan_skill')).set('prompt2','将'+get.translation(trigger.card)+'转换为以下属性之一');
        'step 1'
        if(result.control!='cancel2'){
            player.logSkill('wuxinghelingshan_skill');
            trigger.card.nature=result.control;
            player.popup(get.translation(result.control)+'杀',result.control);
            game.log(trigger.card,'被转为了','#y'+get.translation(result.control),'属性')
        }
    },
            },
            "wuming_fencheng":{
                skillAnimation:false,
                animationColor:"gray",
                audio:"xinfencheng",
                audioname:["re_liru"],
                enable:"phaseUse",
                filter:function(event,player){
        return !player.storage.xinfencheng;
    },
                filterTarget:function(card,player,target){
        return player!=target;
    },
                unique:true,
                limited:true,
                selectTarget:-1,
                multitarget:true,
                multiline:true,
                mark:true,
                line:"fire",
                content:function(){
        "step 0"
        player.storage.xinfencheng=true;
        player.awakenSkill('xinfencheng');
        event.num=1;
        event.targets=targets.slice(0);
        event.targets.sort(lib.sort.seat);
        "step 1"
        if(event.targets.length){
            var target=event.targets.shift();
            event.target=target;
            var res=get.damageEffect(target,player,target,'fire');
            target.chooseToDiscard('he','弃置至少'+get.cnNumber(event.num)+'张牌或受到2点火焰伤害',[num,Infinity]).set('ai',function(card){
                if(ui.selected.cards.length>=_status.event.getParent().num) return -1;
                if(_status.event.player.hasSkillTag('nofire')) return -1;
                if(_status.event.res>=0) return 6-get.value(card);
                if(get.type(card)!='basic'){
                    return 10-get.value(card);
                }
                return 8-get.value(card);
            }).set('res',res);
        }
        else{
            event.finish();
        }
        "step 2"
        if(!result.bool){
            event.target.damage(3,'fire');
            event.num=1;
        }
        else{
            event.num=result.cards.length+1;
        }
        event.goto(1);
        "step 3"
        player.removeSkill('wuming_fencheng');
    },
                ai:{
                    order:1,
                    result:{
                        player:function(player){
                var num=0,eff=0,players=game.filterPlayer(function(current){
                    return current!=player;
                }).sortBySeat(player);
                for(var target of players){
                    if(get.damageEffect(target,player,target,'fire')>=0){num=0;continue};
                    var shao=false;
                    num++;
                    if(target.countCards('he',function(card){
                        if(get.type(card)!='basic'){
                            return get.value(card)<10;
                        }
                        return get.value(card)<8;
                    })<num) shao=true;
                    if(shao){
                        eff-=4*(get.realAttitude||get.attitude)(player,target);
                        num=0;
                    }
                    else eff-=num*(get.realAttitude||get.attitude)(player,target)/4;
                }
                if(eff<4) return 0;
                return eff;
            },
                    },
                },
                init:function(player){
        player.storage.xinfencheng=false;
    },
                intro:{
                    content:"limited",
                },
            },
            xingxi:{
                trigger:{
                    global:"phaseBefore",
                    player:"enterGame",
                },
                audio:"ext:无名:2",
                forced:true,
                filter:function(event,player){
        return (event.name!='phase'||game.phaseNumber==0);
    },
                content:function(){
        'step 0'
        var list=game.filterPlayer(function(current){
            return current!=player;
        });
        list.sortBySeat();
        event.targets=list;
        'step 1'
        var target=targets.shift();
        event.target=target;
        'step 2'
        if(target.isAlive()) target.changeGroup('shen');
        if(targets.length) event.goto(1);
        'step 3'
        player.changeGroup('shen');
    },
            },
            wuxianjianzhi:{
                audio:"ext:无名:1",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
                return player.countCards('e')>=3;
    },
                limited:true,
                skillAnimation:true,
                animationColor:"fire",
                selectTarget:function (){
        return [1,Infinity]
    },
                prompt:"被具象化的世界是有着无数无主的剑之墓碑的红色荒野，作为地平线而出现的是跃动的火焰，远处交织着数个巨大的齿轮。这个结界可以复制曾经见过的武器，保管于结界内。在第五次圣杯战争的时候，就储存着超过千把的武具。卫宫他能够因应状况自由取出并使用那些武器。虽然名义上是宝具，不过正确来说是被称为固有结界的大魔术。",
                intro:{
                    content:"limited",
                },
                filterTarget:function (card,player,target){
        return target!=player;
    },
                contentBefore:function (){
        game.playwuming("卫宫士郎音效");//这里写音效名字
        game[otherFunction[8]](game.wumingGif('卫宫士郎宝具.gif',null,null,true),32500);
    },
                content:function (){
        'step 0'
        game.saveConfig('ark_backgroundpicture','无限剑制');
        game.wumingBgp();
        game.saveConfig('ark_backgroundmusic','エミヤ');
        game.wumingBgm();
        'step 1'
        player.awakenSkill('wuxianjianzhi');
        target.damage('nocard');
        player.reinit(_status.event.player.name,'re_weigong',false);
        if(_status.characterlist){
            _status.characterlist.add(_status.event.player.name);
            _status.characterlist.remove('re_weigong');
        }
        player.addSkill('jianzhi3');
        player.addSkill('duanzao2');
        target.addSkill('jianzhi');
        player.removeSkill('wuxianjianzhi');
        player.changeGroup('shen');
    },
                derivation:["duanzao"],
                mark:true,
                init:function (player,skill){
        player.storage[skill]=false;
    },
                ai:{
                    order:5,
                    result:{
                        target:-1,
                    },
                },
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
            },
            jianzhi:{
                mark:true,
                marktext:"剑制",
                intro:{
                    name:"无限剑制",
                    content:"已经处于无限剑制之中",
                },
                trigger:{
                    player:"phaseDrawBegin",
                },
                content:function (){
        trigger.num--;
    },
                unique:true,
                forced:true,
                mod:{
                    maxHandcard:function (player,num){
            return player.maxHp;
        },
                },
            },
            "jianzhi3":{
                trigger:{
                    player:"changeHp",
                },
                filter:function (event,player){
        return player.hp<=1;
    },
                logTarget:function (event,player){
        return game.filterPlayer((current)=>current!=player&&current.hasSkill('jianzhi'));
    },
                forced:true,
                content:function (){
        'step 0'
        game.saveConfig('ark_backgroundpicture','龙纹');
        game.wumingBgp();
        'step 1'
        game.saveConfig('ark_backgroundmusic','GameChanger');
        game.wumingBgm();
        'step 2'
        var list=game.filterPlayer((current)=>current!=player&&current.hasSkill('jianzhi')).sortBySeat();
        for(var i of list) {
            i.removeSkill('jianzhi');
            i.damage(2,'nocard');
        }
        'step 3'
        player.recover();
        player.removeSkill('jianzhi3');
        player.removeSkill('duanzao2');
        player.addSkill('duanzao');
//改成指定的背景图片，png格式
    },
            },
            "duanzao2":{
                audio:"duanzao",
                enable:"phaseUse",
                position:"he",
                usable:3,
                mark:false,
                filterCard:function(card){
        return true;
    },
                content:function () {
        'step 0'
        var card = get.cards();
        'step 1'
        var cards = lib.skill.duanzao.getEquip();
        player.chooseButton(['选择获得一件神兵：', [cards, 'vcard']], true);
        'step 2'
        if (result.bool) {
            var cardNum = Math.ceil(Math.random() * 13);
            event.card = game.createCard(result.links[0][2], lib.card[result.links[0][2]].suit, cardNum);
            event.card.shengong = true;
            player.chooseTarget('选择将' + get.translation(event.equip) + '置入谁的装备区：').ai = (target) => get.attitude(player, target);
        }
        'step 3'
        if (result.bool) {
            result.targets[0].equip(event.card);
        }
    },
                group:["xin_xiaohui"],
                ai:{
                    order:10,
                    result:{
                        player:1,
                    },
                },
                getEquip:function () {
                var list = ['bintieshuangji', 'wushuangfangtianji', 'guilongzhanyuedao', 'chixueqingfeng', 'wutiesuolian', 'wuxing_xiangheshan','duanjian','yitianjian','yajiaoqiang','chiyanzhenhunqin',
                    'pyzhuren_shandian','pyzhuren_diamond','pyzhuren_spade','pyzhuren_heart','pyzhuren_club','wufengjian','gx_lingbaoxianhu','gx_taijifuchen','jinwuluori','xingtian','xiuluo',
                    'guofengyupao', 'qimenbagua', 'linglongshimandai', 'hongmianbaihuapao', 'huxinjing', 'heiguangkai','taipingyaoshu','tengjia','yinfengjia',
                    'shufazijinguan', 'xuwangzhimian', 'sanlue', 'zhaogujing', 'tianjitu', 'taigongyinfu','tongque',
                    'yonglv',
            ];
        return list;
    },
            },
            yingtong:{
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function(event,player){
        if(event.target.getEquip(2) && event.card.name == 'sha') 
            return true;
        return false;
    },
                content:function(){
        trigger.directHit=true;
    },
                sub:true,
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
            },
            "xin_xiaohui":{
                trigger:{
                    global:["loseEnd","cardsDiscardEnd"],
                },
                forced:true,
                charlotte:true,
                filter:function (event, player) {
        var cs = event.cards;
        for (var i = 0; i < cs.length; i++) {
            if (cs[i].shengong && get.position(cs[i], true) == 'd') return true;
        }
        return false;
    },
                forceDie:true,
                content:function () {
        var list = [];
        var cs = trigger.cards;
        for (var i = 0; i < cs.length; i++) {
            if (cs[i].shengong && get.position(cs[i], true) == 'd') {
                list.push(cs[i]);
            }
        }
        game.log(list, '被销毁了');
        game.cardsGotoSpecial(list);
    },
                sub:true,
            },
            zhengzu:{
                audio:"llqshenwei",
                trigger:{
                    player:"phaseDrawBegin2",
                },
                forced:true,
                preHidden:true,
                filter:function(event,player){
        return !event.numFixed;
    },
                content:function(){
        'step 0'
        trigger.changeToZero();
        'step 1'
        var cards=get.cards(4);
        event.cards=cards;
        player.showCards(cards,get.translation(player)+'发动了【血之真祖】');
        "step 2"
        player.gain(cards,'gain2');
    },
                ai:{
                    threaten:1.5,
                },
                mod:{
                    maxHandcard:function(player,num){
            return num+game.countPlayer(function(current){
                return current.group == player.group;
            });
        },
                },
                group:["zhengzu2","zhengzhu3"],
            },
            "zhengzu2":{
                audio:"ext:无名:2",
                trigger:{
                    player:"phaseJudgeBefore",
                },
                frequent:function(event,player){
        return player.needsToDiscard();
    },
                forced:true,
                filter:false,
                content:function(){
        trigger.cancel();
    },
                sub:true,
            },
            yueji:{
                audio:"ext:无名:1",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
       return player.countCards('e')>=0;
    },
                limited:true,
                skillAnimation:true,
                animationColor:"fire",
                selectTarget:function (){
        return [1,Infinity]
    },
                prompt:"暂时性地将筐体变化为玛纳的凝聚体，确保自星球而来的能量供给准备万全，并由此发出的超强大的一击。并非以魔力造就的自然干涉，而是纯粹的自然现象。喜好肉搏战的第二灵基会把自身以能量弹的形式发射，形成燃料导弹式的攻击。身为自然的婴孩、真祖的王族的第一、第三灵基所使用的，则是来自身处公元1200年的千年城的“她”的时空跳跃攻击。另外，场地会变化（具现化）为『千年城』。",
                intro:{
                    content:"limited",
                },
                filterTarget:function (card,player,target){
        return target!=player;
    },
                contentBefore:function (){
        game.playwuming("公主音效");//这里写音效名字
        game[otherFunction[8]](game.wumingGif('公主宝具.gif',null,null,true),7500);
    },
                content:function (){
    'step 0'
    game.saveConfig('ark_backgroundpicture','公主宝具_Moment2');
    game.wumingBgp();
    game.saveConfig('ark_backgroundmusic','Archetype');
    game.wumingBgm();
    'step 1'
    player.awakenSkill('yueji');
    player.addSkill('qianniancheng2');
    //target.damage(1,'nocard');
    target.addSkill('qianniancheng');
    player.removeSkill('yueji');
    },
                mark:true,
                init:function (player,skill){
        player.storage[skill]=false;
    },
                ai:{
                    order:5,
                    result:{
                        target:-1,
                    },
                },
            },
            qianniancheng:{
                mark:true,
                marktext:"千年城",
                intro:{
                    name:"千年城",
                    content:"处于千年城之中",
                },
                trigger:{
                    player:"phaseDrawBegin",
                },
                content:function (){
        trigger.num--;
    },
                unique:true,
                forced:true,
                group:["qianniancheng3"],
            },
            "qianniancheng2":{
                trigger:{
                    target:"useCardToTargeted",
                },
                forced:true,
                filter:function (event,player,target){
        if(player==event.player) return false;
        if(event.target.name=='Archetype') return true;
        else
            return false;
    },
                mod:{
                    targetInRange:function (card,player,target){
            if(target.hasSkill('qianniancheng')) return true;
        },
                },
                content:function (){
        "step 0"
        player.judge(function(card){
            if(get.zhu(_status.event.player,'shouyue')){
                if(get.suit(card)!='spade') return 2;
            }
            else{
                if(get.color(card)=='red') return 2;
            }
            return -0.5;
        }).judge2=function(result){
            return result.bool;
        };
        "step 1"
        if(result.bool){
            trigger.getParent().targets.remove(player);
        }
    },
            },
            "qianniancheng3":{
                trigger:{
                    player:"phaseEnd",
                },
                filter:false,
                forced:true,
                content:function(){
        "step 0"
        if(trigger.player.countCards('h')>0){
                     trigger.player.chooseToDiscard(1,'h','弃置一张手牌或失去一点体力',false).set('ai',function(card){
                if(_status.event.nono){
                    return 0;
                }
                if(_status.event.player.hp<=2) return 10-get.value(card);
                return 9-get.value(card);
            })                
                }        
        "step 1"
        if(result.bool){
            
        }
        else{
            trigger.player.loseHp();
        }
    },
                sub:true,
            },
            "zhengzhu3":{
                audio:"ext:无名:2",
                trigger:{
                    global:"dying",
                },
                frequent:function(event,player){
        return player.needsToDiscard();
    },
                forced:true,
                filter:false,
                content:function(){
        trigger.cancel();
        trigger.player.die();
    },
                sub:true,
            },
            henshi:{
                audio:"ext:无名:2",
                audioname:["re_pangtong"],
                unique:true,
                enable:"chooseToUse",
                mark:true,
                limited:true,
                skillAnimation:true,
                animationStr:"变身",
                animationColor:"fire",
                init:function(player){
        player.storage.niepan=false;
    },
                filter:function(event,player){
        if(player.storage.niepan) return false;
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        else if(event.parent.name=='phaseUse'){
            return true;
        }
        return false;
    },
                contentBefore:function (){
        game.playwuming("变身音效");//这里写音效名字
        game[otherFunction[8]](game.wumingGif('变身动画.gif',null,null,true),35000);
    },
                content:function(){
        'step 0'
        game.log(player,'将变身为','Cronicle');
        'step 1'
        player.awakenSkill('henshi');
        player.reinit(_status.event.player.name,'Cronicle',false);
        if(_status.characterlist){
            _status.characterlist.add(_status.event.player.name);
            _status.characterlist.remove('Cronicle');
        }
        game.log('御天之骑，铭刻编年，此时此刻，正是极限之时！');
        'step 2'
        player.link(false);
        'step 3'
        player.turnOver(false);
        'step 4'
        player.draw(3);
        'step 5'
        player.$fullscreenpop('此刻正是极限之时！','wood');
        'step 6'
        game.saveConfig('ark_backgroundmusic','JUSTICE');
        game.wumingBgm();
    },
                ai:{
                    order:0.5,
                    skillTagFilter:function(player,tag,target){
            if(player!=target||player.storage.niepan) return false;
        },
                    save:true,
                    result:{
                        player:function(player){
                if(player.hp<=0) return 10;
                if(player.hp<=1&&player.countCards('he')<=1) return 10;
                return 0;
            },
                    },
                    threaten:2,
                },
                intro:{
                    content:"limited",
                },
            },
            touying:{
                audio:"duanzao",
                trigger:{
                    global:"phaseEnd",
                },
                filter:function(event,player,trigger){
        return _status.currentPhase!=player && event.player.countCards('e')>0;;
    },
                direct:true,
                content:function(){
                "step 0"
        var next;
        if(trigger.player.hasCard(function(card){
            return get.subtype(card);
        },'e')){
            next=player.chooseControl('投影装备','cancel2',function(event,player){
                var source=_status.event.sourcex;
                var att=get.attitude(player,source);
                if(source.hasSkillTag('noe')){
                    if(att>0){
                        return '投影装备';
                    }
                }
                else{
                    if(att<=0&&source.countCards('e',function(card){
                        return get.value(card,source)>0&&get.effect(player,card,player,player)>0;
                    })){
                        return '投影装备';
                    }
                }
                return 'draw_card';
            }).set('sourcex',trigger.player);
        }
        else{
            next=player.chooseControl('draw_card','cancel2',function(){
                return 'draw_card';
            });
            event.finish();
        }
        next.set('prompt',get.prompt('touying',trigger.player));
        "step 1"
        if(result.control != '投影装备'){
    event.finish();
        }
        else{
            player.logSkill('touying',trigger.player);
        }
        "step 2"
        var cards = lib.skill.touying.getEquip(trigger.player);
        player.chooseButton(['选择获得一件装备：', [cards, 'vcard']], true);
        'step 3'
        if (result.bool) {
            var cardNum = Math.ceil(Math.random() * 13);
            event.card = game.createCard(result.links[0][2], lib.card[result.links[0][2]].suit, cardNum);
            event.card.touying = true;
            player.chooseTarget('选择将' + get.translation(event.equip) + '置入谁的装备区：').ai = (target) => get.attitude(player, target);
        }
        'step 4'
        if (result.bool) {
            result.targets[0].equip(event.card);
        }
    },
                getEquip:function (player) {
         var list =[];
        player.countCards('e',function(card){
            list.add(card.name);
        });
        return list;
    },
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
                group:["touying_xiaohui"],
            },
            "touying_xiaohui":{
                trigger:{
                    global:["loseEnd","cardsDiscardEnd"],
                },
                forced:true,
                charlotte:true,
                filter:function (event, player) {
        var cs = event.cards;
        for (var i = 0; i < cs.length; i++) {
            if (cs[i].touying && get.position(cs[i], true) == 'd') return true;
        }
        return false;
    },
                forceDie:true,
                content:function () {
        var list = [];
        var cs = trigger.cards;
        for (var i = 0; i < cs.length; i++) {
            if (cs[i].touying && get.position(cs[i], true) == 'd') {
                list.push(cs[i]);
            }
        }
        game.log(list, '被销毁了');
        game.cardsGotoSpecial(list);
    },
                sub:true,
            },
            "wuming_guanxing":{
                audio:"guanxing",
                audioname:["jiangwei","re_jiangwei","re_zhugeliang"],
                trigger:{
                    player:["phaseZhunbeiBegin","phaseJieshuBegin"],
                },
                frequent:true,
                content:function() {
        'step 0'
        if (player.isUnderControl()) {
            game.modeSwapPlayer(player);
        }
        var num = 5;
        var player = event.player;
        if(player.isUnderControl()) game.modeSwapPlayer(player);
        
        var cards = get.cards(num);
        var guanXing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
        game.broadcast(function(player, cards){
            if (!window.decadeUI) return;
            decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length);
        }, player, cards);
        
        event.switchToAuto = function(){
            var cards = guanXing.cards[0].concat();
            var cheats = [];
            var judges = player.node.judges.childNodes;

            if (judges.length) {
                cheats = decadeUI.get.cheatJudgeCards(cards, judges, true);
            }
            
            if (cards.length && cheats.length == judges.length) {
                for (var i = 0; i >= 0 && i < cards.length; i++) {
                    if (get.value(cards[i], player) >= 5) {
                        cheats.push(cards[i]);
                        cards.splice(i, 1)
                    }
                }
            }
            
            var time = 500;
            for (var i = 0; i < cheats.length; i++) {
                setTimeout(function(card, index, finished){
                    guanXing.move(card, index, 0);
                    if (finished) guanXing.finishTime(1000);
                }, time, cheats[i], i, (i >= cheats.length - 1) && cards.length == 0);
                time += 500;
            }
            
            for (var i = 0; i < cards.length; i++) {
                setTimeout(function(card, index, finished){
                    guanXing.move(card, index, 1);
                    if (finished) guanXing.finishTime(1000);
                }, time, cards[i], i, (i >= cards.length - 1));
                time += 500;
            }
        };
        
        if (event.isOnline()) {
            event.player.send(function(){
                if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
            }, event.player);
            
            event.player.wait();
            decadeUI.game.wait();
        } else if (!event.isMine()) {
            event.switchToAuto();
        }
        'step 1'
        player.popup(get.cnNumber(event.num1) + '上' + get.cnNumber(event.num2) + '下');
        game.log(player, '将' + get.cnNumber(event.num1) + '张牌置于牌堆顶，' + get.cnNumber(event.num2) +'张牌置于牌堆底');
        game.updateRoundNumber()
    },
                ai:{
                    threaten:1.2,
                },
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
            },
            "wuming_kanpo":{
                trigger:{
                    global:"useCard1",
                },
                round:1,
                audio:"rekanpo",
                filter:function(event,player){
        if(event.targets.length!=1) return false;
        if(event.targets==event.player) return false;
        if(event.player==player) return false;
        else return true;
    },
                insert:true,
                filterCard:function(card){
        return true;
    },
                loseTo:"cardPile",
                check:function(event,player){
        return get.effect(player,event.card,event.player,player)<0;
    },
                "prompt2":function(event,player){
        return '取消'+get.translation(event.player)+'使用的'+get.translation(event.card)+'目标';
    },
                autodelay:true,
                content:function(){
       "step 0"
       player.draw();
       "step 1"
       event.cards=player.chooseToDiscard(true,'h');
       "step 2"
       if(result.bool&&result.moved&&result.moved[0].length) cards=result.moved[0].slice(0);
        while(cards.length){
            var card=cards.pop();
            if(get.position(card,true)=='o'){
                card.fix();
                ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
                game.log(player,'将',card,'置于牌堆顶');
            }
            player.draw(5);
        }
        game.updateRoundNumber();
       "step 3"
       trigger.targets.length=0;
       trigger.all_excluded=true;
    },
                ai:{
                    threaten:function(player,target){
            if(game.roundNumber-target.storage.xuanzhen_roundcount<1) return 2.2;
            return 0.6;
        },
                },
                group:["wuming_kanpo_roundcount"],
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
            },
            cijia:{
                audio:"reganglie",
                trigger:{
                    player:"damageEnd",
                },
                filter:function(event,player){
        return (event.source!=undefined&&event.num>0&&event.source!=player);
    },
                logTarget:"source",
                preHidden:true,
                content:function(){
        "step 0"
        event.num=trigger.num;
        "step 1"
        player.judge(function(card){
            if(get.color(card)=='red') return 1;
            return 0;
        });
        "step 2"
        if(result.color=='black'){
            if(trigger.source.countCards('he')){
                player.discardPlayerCard(trigger.source,'he',true);
            }
            player.draw();
        }
        else if(trigger.source.isIn()){
            trigger.source.damage(2);
        }
        event.num--;
        if(event.num>0){
            player.chooseBool(get.prompt2('cijia'));
        }
        else{
            event.finish();
        }
        "step 3"
        if(result.bool){
            player.logSkill('cijia',trigger.source);
            event.goto(1);
        }
    },
            },
            fuwu:{
                audio:"fuhan",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                unique:true,
                limited:true,
                skillAnimation:false,
                animationColor:"orange",
                forceunique:true,
                filter:function(event,player){
        return player.countMark('fanghun')>=0;
    },
                content:function(){
        'step 0'
        if(player.storage.fanghun) player.draw(player.storage.fanghun);
        player.removeMark('fanghun',player.storage.fanghun);
        player.awakenSkill('refuhan');
        'step 1'
        var list;
        if(_status.characterlist){
            list=[];
            for(var i=0;i<_status.characterlist.length;i++){
                var name=_status.characterlist[i];
                if(lib.character[name][1]=='wu') list.push(name);
            }
        }
        else if(_status.connectMode){
            list=get.charactersOL(function(i){
                return lib.character[i][1]!='wu';
            });
        }
        else{
            list=get.gainableCharacters(function(info){
                return info[1]=='shu';
            });
        }
        var players=game.players.concat(game.dead);
        for(var i=0;i<players.length;i++){
            list.remove(players[i].name);
            list.remove(players[i].name1);
            list.remove(players[i].name2);
        }
        list.remove('zhaoyun');
        list.remove('re_zhaoyun');
        list.remove('ol_zhaoyun');
        list=list.randomGets(14);
        var skills=[];
        for(var i of list){
            skills.addArray((lib.character[i][3]||[]).filter(function(skill){
                var info=get.info(skill);
                return info&&!info.zhuSkill&&!info.limited&&!info.juexingji&&!info.hiddenSkill&&!info.charlotte&&!info.dutySkill;
            }));
        }
        if(!list.length||!skills.length){event.finish();return;}
        if(player.isUnderControl()){
            game.swapPlayerAuto(player);
        }
        var switchToAuto=function(){
            _status.imchoosing=false;
            event._result={
                bool:true,
                skills:skills.randomGets(3),
            };
            if(event.dialog) event.dialog.close();
            if(event.control) event.control.close();
        };
        var chooseButton=function(list,skills){
            var event=_status.event;
            if(!event._result) event._result={};
            event._result.skills=[];
            var rSkill=event._result.skills;
            var dialog=ui.create.dialog('请选择获得至多三个技能',[list,'character'],'hidden');
            event.dialog=dialog;
            var table=document.createElement('div');
            table.classList.add('add-setting');
            table.style.margin='0';
            table.style.width='100%';
            table.style.position='relative';
            for(var i=0;i<skills.length;i++){
                var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                td.link=skills[i];
                table.appendChild(td);
                td.innerHTML='<span>'+get.translation(skills[i])+'</span>';
                td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
                    if(_status.dragged) return;
                    if(_status.justdragged) return;
                    _status.tempNoButton=true;
                    setTimeout(function(){
                        _status.tempNoButton=false;
                    },500);
                    var link=this.link;
                    if(!this.classList.contains('bluebg')){
                        if(rSkill.length>=2) return;
                        rSkill.add(link);
                        this.classList.add('bluebg');
                    }
                    else{
                        this.classList.remove('bluebg');
                        rSkill.remove(link);
                    }
                });
            }
            dialog.content.appendChild(table);
            dialog.add('　　');
            dialog.open();
            
            event.switchToAuto=function(){
                event.dialog.close();
                event.control.close();
                game.resume();
                _status.imchoosing=false;
            };
            event.control=ui.create.control('ok',function(link){
                event.dialog.close();
                event.control.close();
                game.resume();
                _status.imchoosing=false;
            });
            for(var i=0;i<event.dialog.buttons.length;i++){
                event.dialog.buttons[i].classList.add('selectable');
            }
            game.pause();
            game.countChoose();
        };
        if(event.isMine()){
            chooseButton(list,skills);
        }
        else if(event.isOnline()){
            event.player.send(chooseButton,list,skills);
            event.player.wait();
            game.pause();
        }
        else{
            switchToAuto();
        }
        'step 2'
        var map=event.result||result;
        if(map&&map.skills&&map.skills.length){
            for(var i of map.skills) player.addSkillLog(i);
        }
        game.broadcastAll(function(list){
            game.expandSkills(list);
            for(var i of list){
                var info=lib.skill[i];
                if(!info) continue;
                if(!info.audioname2) info.audioname2={};
                info.audioname2.old_yuanshu='weidi';
            }
        },map.skills);
        'step 3'
        if(player.isMinHp()) player.recover();
        'step 4'
        player.removeSkill("fushen");
    },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
            },
            mutieke:{
                audio:"wuming_linglong",
                trigger:{
                    player:["damageBegin3","damageBegin4"],
                },
                charlotte:true,
                locked:true,
                init:function(player){
        var a=window.setInterval(function(){
            if(player.hasSkill('mutieke')){
                player.storage.mutieke=true;
            }                    
            else{ 
               // game.addGlobalSkill('mutieke');
               // game.addGlobalSkill('mutieke');
                window.clearInterval(a);
            }
        },1000);
    },
                filter:false,
                forced:true,
                content:function (){
         trigger.num = 0;
    },
                group:["mitike","mutike5"],
            },
            mitike:{
                audio:"wuming_linglong",
                forced:true,
                init:function (player){
    if(player==game.zhu)
        player.hp=5;
    else
        player.hp=4;
    player.storage.hp=player.hp;
    player.storage.maxHp=player.maxHp;
    player.update();
    },
                trigger:{
                    player:["damageBefore","recoverBefore","loseHpBefore","loseMaxHpBefore","gainMaxHpBefore"],
                },
                content:function (){
    trigger.cancel();
    },
                group:["boss_hunyou_dying","boss_hunyou_dieBegin"],
                subSkill:{
                    dying:{
                        trigger:{
                            player:"dying",
                        },
                        silent:true,
                        filter:function (event,player){
            if(player.hp!=player.storage.hp&&player.storage.hp>0) return true;
            return false;
            },
                        content:function (){
                        trigger.cancel();
                        player.maxHp=player.storage.maxHp;
                        player.hp=player.storage.hp;
                        player.update();                        
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    dieBegin:{
                        trigger:{
                            player:"dieBegin",
                        },
                        silent:true,
                        filter:function (event,player){
            if(player.maxHp!=player.storage.maxHp&&player.storage.maxHp>0) return true;
            return false;
            },
                        content:function (){
                        trigger.cancel();
                        player.maxHp=player.storage.maxHp;
                        player.hp=player.storage.hp;
                        player.update();
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "mitike4":{
                forced:true,
                trigger:{
                    global:["gameStart","phaseBefore"],
                    player:"dieBegin",
                },
                priority:50,
                init:function (player){
       
    },
                content:function (){
        
    },
            },
            "mutike5":{
                trigger:{
                    player:"dieBefore",
                },
                forced:true,
                filter:function(event,player){
        return player.maxHp>0;
    },
                content:function(){
        trigger.cancel();
        player.hp=5;
        player.update();
    },
            },
            riderkick:{
                trigger:{
                    source:"damageBegin1",
                },
                filter:function (event,player,target){
        return player!=event.player;
    },
                forced:true,
                content:function () {
        trigger.num=0;
        trigger.player.addMark('hitkick');
        if(!trigger.player.hasSkill('kick'))
            trigger.player.addSkill('kick');
    },
                mod:{
                    cardUsable:function (card, player, num) {
            if (card.name == 'sha') return Infinity;
        },
                    attackFrom:function () {
            return -Infinity;
        },
                },
            },
            hitkick:{
                mark:true,
                marktext:"Hit",
                intro:{
                    name:"Hit...",
                    content:"你以为这样的攻击对我会有用吗？",
                },
                sub:true,
            },
            kick:{
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function(event,player){
       return player.countMark('hitkick') >= player.hp;
    },
                content:function (){
        player.die();
    },
                forced:true,
                sub:true,
            },
            jiayu:{
                audio:"ext:无名:2",
                enable:"phaseUse",
                usable:3,
                position:"he",
                mark:true,
                content:function(){
        'step 0'
        event.num=5;
        var list = ['decade','Cronicle','hypermitike','blade','build','king','kugga','faiz'];
        // var dialog=ui.create.dialog();
        // dialog.add([list.randomGets(5),'character']);
        player.chooseButton(true).set('ai',function(button){
            return get.rank(button.link,true)-lib.character[button.link][2];
        }).set('createDialog',['将武将牌替换为一名角色',[list,'character']]);
        'step 1'
        event.num=Math.min(event.num,8);
        game.log(_status.event.player.name,' 发动了卡面驾驭，变身为 ',result.links[0]);
        player.reinit(_status.event.player.name,result.links[0],false);
        if(_status.characterlist){
            _status.characterlist.add(_status.event.player.name);
            _status.characterlist.remove(result.links[0]);
        }
        'step 2'
        player.addSkill("jiayu");
    },
            },
            decadekick:{
                audio:"ext:无名:2",
                enable:"phaseUse",
                usable:1,
                position:"he",
                content:function(){
        player.draw(3);
    },
                ai:{
                    order:8,
                    result:{
                        player:1,
                    },
                },
            },
            "wuming_liegong":{
                shaRelated:true,
                mod:{
                    targetInRange:function(card,player,target){
            if(card.name=='sha'&&typeof get.number(card)=='number'){
                if(get.distance(player,target)<=get.number(card)) return true;
            }
        },
                },
                audio:"sbliegong",
                audioname:["re_huangzhong"],
                trigger:{
                    player:"useCardToTargeted",
                },
                logTarget:"target",
                check:function(event,player){
        return get.attitude(player,event.target)<=0;
    },
                filter:function(event,player){
        if(event.card.name!='sha') return false;
        return true;
    },
                content:function(){
        'step 0'
        if(trigger.target.countCards('h')<=player.countCards('h')) trigger.getParent().directHit.push(trigger.target);
        'step 1'
        var cards = get.cards(3);
        for (var i = cards.length - 1; i--; i >= 0) {
            ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
        }
        game.updateRoundNumber();
        event.cards = cards;
        player.showCards(cards, get.translation(player) + '对' + get.translation(trigger.target) + '发动了【烈弓】');
        'step 2'
        var id=trigger.target.playerid;
        var map=trigger.getParent().customArgs;
        if(!map[id]) map[id]={};
        if(typeof map[id].extraDamage!='number'){
            map[id].extraDamage=0;
        }
        var list=[];
        event.num = 0;
        for (var i of cards)
        {
            if (!list.contains(get.suit(i))) 
            {
                list.push(get.suit(i));
                event.num++;
                map[id].extraDamage++;
            }
        }
 
        'step 3'
        player.draw(4-event.num);
    },
                ai:{
                    threaten:0.5,
                    "directHit_ai":true,
                    skillTagFilter:function(player,tag,arg){
            if(get.attitude(player,arg.target)<=0&&arg.card.name=='sha'&&player.countCards('h',function(card){
                return card!=arg.card&&(!arg.card.cards||!arg.card.cards.contains(card));
            })>=arg.target.countCards('h')) return true;
            return false;
        },
                },
            },
            "wuming_huoji":{
                trigger:{
                    player:"loseEnd",
                },
                audio:"huoji",
                frequent:true,
                filter:function(event,player){
        if(player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h' && get.color(event.cards[i])=='red') return true;
        }
        return false;
    },
                content:function(){
        'step 0'
        player.chooseTarget('选择一名角色造成一点火焰伤害').set('ai',function(target){
            var player=_status.event.player;
            var att=get.attitude(player,target);
            if(att>=4) return 0;
            return att;
        });
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            target.damage(1,'fire');
        }
    },
                ai:{
                    effect:{
                        target:function(card){
                if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
            },
                    },
                },
            },
            startup:{
                usable:1,
                enable:"phaseUse",
                prompt:"切换为加速形态。",
                contentBefore:function (){
        game.playwuming("加速音效");//这里写音效名字
        game[otherFunction[8]](game.wumingGif('加速视频.gif',null,null,true),14000);
    },
                content:function(){
        "step 0"
        player.loseHp(1);
        "step 1"
        player.reinit(_status.event.player.name,'faizaccel',false);
    },
                ai:{
                    basic:{
                        order:8,
                    },
                },
            },
            clockup:{
                charlotte:true,
                mod:{
                    attackFrom:function(from,to,distance){
            return -Infinity;
        },
                },
                trigger:{
                    player:"useCardBefore",
                },
                audio:"ext:无名:2",
                direct:true,
                group:["information"],
                filter:function(event,player){
        var info=get.info(event.card,false);
        //if(info.allowMultiple==false) return false;
        if(info.type == 'basic') return true;
        if(event.card.name!='sha'&&info.type!='trick') return false;
        if(event.targets&&!info.multitarget){
            if(game.hasPlayer(function(current){
                return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current)&&lib.filter.targetInRange(event.card,player,current);
            })){
                return true;
            }
        }
        return false;
    },
                content:function(){
        'step 0'
        var num=game.countPlayer(function(current){
            return !trigger.targets.contains(current)&&lib.filter.targetEnabled2(trigger.card,player,current)&&lib.filter.targetInRange(trigger.card,player,current);
        });
        player.chooseTarget('加速：是否为'+get.translation(trigger.card)+'增加'+'一个'+'目标？',[1],function(card,player,target){
            var trigger=_status.event.getTrigger();
            var card=trigger.card;
            return !trigger.targets.contains(target)&&lib.filter.targetEnabled2(card,player,target)&&lib.filter.targetInRange(card,player,target);
        }).set('ai',function(target){
            var player=_status.event.player;
            var card=_status.event.getTrigger().card;
            return get.effect(target,card,player,player);
        });
        'step 1'
        if(result.bool){
            if(player!=game.me&&!player.isOnline()) game.delayx();
        }
        else event.finish();
        'step 2'
        var targets=result.targets.sortBySeat();
        player.logSkill('clockup',targets);
        trigger.targets.addArray(targets);
        event.goto(0);
    },
            },
            "wuming_jianji":{
                trigger:{
                    player:"shaHit",
                },
                check:function(event,player){
        var att=get.attitude(player,event.target);
        if(event.target.hp==1) return att>0;
        return att<=0;
    },
                filter:function(event,player){
        return !event.target.isTurnedOver();
    },
                logTarget:"target",
                content:function(){
        trigger.unhurt=true;
        trigger.player.addMark('jian_cards');
        trigger.target.turnOver();
        trigger.target.draw();
    },
            },
            luguo:{
                trigger:{
                    global:"phaseBefore",
                    player:"enterGame",
                },
                audio:"ext:无名:2",
                forced:true,
                filter:function(event,player){
        return (event.name!='phase'||game.phaseNumber==0);
    },
                content:function(){
        player.changeGroup('shen');
    },
            },
            "decade_henshi":{
                audio:"jiayu",
                unique:true,
                enable:"chooseToUse",
                mark:true,
                limited:true,
                skillAnimation:true,
                animationStr:"变身",
                animationColor:"fire",
                filter:function(event,player){
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        else if(event.parent.name=='phaseUse'){
            return true;
        }
        return false;
    },
                content:function(){
        'step 0'
        game.log(player,'将变身为','decade');
        'step 1'
        player.awakenSkill('decade_henshi');
        player.reinit(_status.event.player.name,'decade',false);
        if(_status.characterlist){
            _status.characterlist.add(_status.event.player.name);
            _status.characterlist.remove('decade');
        }
        game.log('路过的假面骑士，你给我记好了！');
        'step 2'
        player.$fullscreenpop('路过的假面骑士','fire');
        player.link(false);
        player.recover(3);
        'step 3'
        player.turnOver(false);
        'step 4'
        player.removeSkill("decade_henshi");
    },
                ai:{
                    order:0.5,
                    skillTagFilter:function(player,tag,target){
            if(player!=target||player.storage.niepan) return false;
        },
                    save:true,
                    result:{
                        player:function(player){
                if(player.hp<=0) return 10;
                if(player.hp<=1&&player.countCards('he')<=1) return 10;
                return 0;
            },
                    },
                    threaten:2,
                },
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
            },
            shanji:{
                equipSkill:true,
                trigger:{
                    player:["useCard","respondAfter"],
                },
                direct:true,
                filter:function(event,player){
        if(_status.currentPhase==player) return false;
        if(!event.cards) return false;
        if(event.cards.length!=1) return false;
        if(lib.filter.autoRespondSha.call({player:player})) return false;
        return true;
    },
                content:function(){
        'step 0'
        player.draw();
        'step 1'
        var next=player.chooseToUse(get.prompt('shanji'),{name:'sha'});
        next.aidelay=true;
        next.logSkill='shanji';
        next.noButton=true;
        'step 2'
        if(result.bool){
            game.delay();
        }
    },
            },
            "jian_cards":{
                mark:true,
                marktext:"卡",
                intro:{
                    name:"卡片",
                    content:function(storage,player,skill){//返回值（文本）即为标记显示内容
                 return '当前有'+storage+'个标记,集齐13个标记可以成为帝皇剑。'//标记显示内容为当前有多少个标记
         },
                },
                sub:true,
            },
            tigahenshi:{
                audio:"ext:无名:2",
                unique:true,
                enable:"chooseToUse",
                mark:true,
                limited:true,
                skillAnimation:true,
                animationStr:"变身",
                animationColor:"fire",
                init:function(player){
        player.storage.niepan=false;
    },
                filter:function(event,player){
        if(player.storage.niepan) return false;
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        else if(event.parent.name=='phaseUse'){
            return true;
        }
        return false;
    },
                content:function(){
        'step 0'
        game.log(player,'将变身为','dijia');
        'step 1'
        player.awakenSkill('henshi');
        player.reinit(_status.event.player.name,'dijia',false);
        if(_status.characterlist){
            _status.characterlist.add(_status.event.player.name);
            _status.characterlist.remove('dijia');
        }
        game.log('大骨熬成汤');
        'step 2'
        player.link(false);
        'step 3'
        player.turnOver(false);
        'step 4'
        player.draw(3);
    },
                ai:{
                    order:0.5,
                    skillTagFilter:function(player,tag,target){
            if(player!=target||player.storage.niepan) return false;
        },
                    save:true,
                    result:{
                        player:function(player){
                if(player.hp<=0) return 10;
                if(player.hp<=1&&player.countCards('he')<=1) return 10;
                return 0;
            },
                    },
                    threaten:2,
                },
                intro:{
                    content:"limited",
                },
            },
            jianming:{
                trigger:{
                    player:"dying",
                },
                priority:7,
                forced:true,
                audio:"ext:无名:2",
                filter:function (event,player){
        return player.hp<=0;
    },
                content:function (){
        'step 0'
        player.judge(function(card){
            return get.suit(card)=='heart'?-1:1;
        });
        'step 1'
        if(result.bool){
            player.recover(1-player.hp);
            player.draw();           
        }
    },
                mod:{
                    maxHandcard:function (player,num){
            return player.maxHp;
        },
                },
                ai:{
                    threaten:1.2,
                },
            },
            information:{
                trigger:{
                    player:"phaseEnd",
                },
                filter:false,
                forced:true,
                audio:"ext:无名:2",
                content:function(){
        player.reinit(_status.event.player.name,'faiz',false);
    },
                sub:true,
            },
            maoshetou:{
                audio:"ext:无名:2",
                trigger:{
                    player:"damageBegin3",
                },
                forced:true,
                content:function(){
        if(event.nature=='fire'){
            trigger.num++;
        }
        else{
            player.draw(2);
        }
    },
            },
            "blade_chongsheng":{
                trigger:{
                    player:"dying",
                },
                direct:true,
                skillAnimation:true,
                animationColor:"metal",
                forceDie:true,
                forced:false,
                content:function (){
        'step 0'
        player.draw();
        'step 1'
        player.init("kingform");
        'step 2'
        player.$fullscreenpop('帝皇剑','CD7F32');
    },
                derivation:["shenjian","wmjiandi"],
            },
            wmjiandi:{
                trigger:{
                    player:"useCardToBegin",
                },
                shaRelated:true,
                direct:true,
                filter:function (event, player) {
        return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
    },
                content:function () {
        'step 0'
        var next = player.choosePlayerCard(trigger.target, 'hej', [1, Math.min(trigger.target.hp, trigger.target.countCards('he'))], get.prompt('wmjiandi', trigger.target));
        next.set('ai', function (button) {
            if (!_status.event.goon) return 0;
            var val = get.value(button.link);
            if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
            return val;
        });
        next.set('goon', get.attitude(player, trigger.target) <= 0);
        next.set('forceAuto', true);
        'step 1'
        if (result.bool) {
            var target = trigger.target;
            player.logSkill(event.name, trigger.target);
            var type = [];
            result.cards.forEach(card => type.add(get.position(card)));
            trigger.baseDamage += type.length;
            target.addToExpansion(result.cards,'giveAuto',target).gaintag.add('wmjiandi_2');
            target.addSkill('wmjiandi_2');
            //game.log(target, '失去了' + get.cnNumber(result.cards.length) + '张牌');
        }
    },
                ai:{
                    "unequip_ai":true,
                    "directHit_ai":true,
                    skillTagFilter:function (player, tag, arg) {
            if (get.attitude(player, arg.target) > 0) return false;
            if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
            if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
            return false;
        },
                },
                subSkill:{
                    "2":{
                        charlotte:true,
                        trigger:{
                            global:"phaseJieshuBegin",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event, player) {
                return player.getExpansions('wmjiandi_2').length>0;
            },
                        content:function () {
                'step 0'
                event.source = game.findPlayer(current => current.hasSkill('wmjiandi'));
                var dialog = ui.create.dialog(`【剑帝】`);
                dialog.addText(`请选择获得${Math.ceil(player.getExpansions('wmjiandi_2').length / 2)}张 ` + get.translation(player) + ' 的〖剑帝〗牌：');
                dialog.add([player.getExpansions('wmjiandi_2'), 'card']);
                event.source.chooseButton(dialog, true).set('selectButton', [Math.ceil(player.getExpansions('wmjiandi_2').length / 2), Math.ceil(player.getExpansions('wmjiandi_2').length / 2)]).set('ai', function (button) {
                    return 7 - get.buttonValue(button)
                });
                'step 1'
                // if(!result.bool) return event.finish();
                event.source.gain(result.links, player, 'giveAuto');
                for(var i=0;i<result.links.length;i++){
                    result.links[i].gaintag.remove('wmjiandi_2');
                }
                if (player.getExpansions('wmjiandi_2') && player.getExpansions('wmjiandi_2').length) {
                    game.log(player, '收回了' + get.cnNumber(player.gain(player.getExpansions('wmjiandi_2')).cards.length) + '张〖剑帝〗牌');
                    player.getExpansions('wmjiandi_2').length = 0;
                }
                player.removeSkill('wmjiandi_2');
            },
                        marktext:"帝",
                        mark:true,
                        intro:{
                            markcount:"expansion",
                            mark:function(dialog,storage,player){
                    var cards=player.getExpansions('wmjiandi_2');
                    if(player.isUnderControl(true)) dialog.addAuto(cards);
                    else return '共有'+get.cnNumber(cards.length)+'张牌';
                },
                        },
                        sub:true,
                    },
                },
            },
            "wmjiandi_2":{
                charlotte:true,
                trigger:{
                    global:"phaseJieshuBegin",
                },
                forced:true,
                popup:false,
                filter:function (event, player) {
        return player.getExpansions('wmjiandi_2').length>0;
    },
                content:function () {
        'step 0'
        event.source = game.findPlayer(current => current.hasSkill('wmjiandi'));
        var dialog = ui.create.dialog(`【剑帝】`);
        dialog.addText(`请选择获得${Math.ceil(player.getExpansions('wmjiandi_2').length / 2)}张 ` + get.translation(player) + ' 的〖剑帝〗牌：');
        dialog.add([player.getExpansions('wmjiandi_2'), 'card']);
        event.source.chooseButton(dialog, true).set('selectButton', [Math.ceil(player.getExpansions('wmjiandi_2').length / 2), Math.ceil(player.getExpansions('wmjiandi_2').length / 2)]).set('ai', function (button) {
            return 7 - get.buttonValue(button)
        });
        'step 1'
        // if(!result.bool) return event.finish();
        event.source.gain(result.links, player, 'giveAuto');
        for(var i=0;i<result.links.length;i++){
            result.links[i].gaintag.remove('wmjiandi_2');
        }
        if (player.getExpansions('wmjiandi_2') && player.getExpansions('wmjiandi_2').length) {
            game.log(player, '收回了' + get.cnNumber(player.gain(player.getExpansions('wmjiandi_2')).cards.length) + '张〖剑帝〗牌');
            player.getExpansions('wmjiandi_2').length = 0;
        }
        player.removeSkill('wmjiandi_2');
    },
                marktext:"帝",
                mark:true,
                intro:{
                    markcount:"expansion",
                    mark:function(dialog,storage,player){
            var cards=player.getExpansions('wmjiandi_2');
            if(player.isUnderControl(true)) dialog.addAuto(cards);
            else return '共有'+get.cnNumber(cards.length)+'张牌';
        },
                },
                sub:true,
            },
            "wuming_yingyuan":{
                audio:"ext:无名:2",
                trigger:{
                    player:"useCardAfter",
                },
                direct:true,
                filter:function(event,player){
        if(_status.currentPhase!=player) return false;
        if(player.getHistory('custom',function(evt){
            return evt.yingyuan_name==event.card.name;
        }).length>0) return false;
        return event.cards.filterInD().length>0
    },
                content:function(){
        'step 0'
        player.chooseTarget(get.prompt('yingyuan'),'将'+get.translation(trigger.cards)+'交给一名其他角色',function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            if(target.hasJudge('lebu')) return 0;
            var att=get.attitude(_status.event.player,target);
            if(att<3) return 0;
            if(target.hasSkillTag('nogain')) att/=10;
            if(target.hasSha()&&_status.event.sha){
                att/=5;
            }
            if(event.wuxie&&target.needsToDiscard(1)){
                att/=5;
            }
            return att/(1+get.distance(player,target,'absolute'));
        }).set('sha',trigger.cards[0].name=='sha').set('wuxie',trigger.cards[0].name=='wuxie');
        'step 1'
        if(result.bool){
            player.logSkill('yingyuan',result.targets[0]);
            result.targets[0].gain(trigger.cards.filterInD(),'gain2');
            player.getHistory('custom').push({yingyuan_name:trigger.card.name});
        }
    },
            },
            shenjian:{
                mod:{
                    cardnature:function(card,player){
            if(get.name(card)=='sha') return 'kami';
        },
                },
                ai:{
                    threaten:3,
                },
            },
            yihuan:{
                enable:"phaseUse",
                usable:1,
                position:"he",
                filter:function(event,player){
        if(player.countCards('h',{type:'basic'})!=0) return true;
        return false;
    },
                content:function(){
        'step 0'
        var cards=player.getCards('h',function(card){
            return get.type(card)=='basic';
        });
        if(cards.length){
            player.lose(cards)._triggered=null;
        }
        event.num=1+cards.length;
        'step 1'
        var cards=[];
        var list=get.typeCard('trick');
        for(var i=0;i<list.length;i++){
            if(lib.card[list[i]].derivation){
                list.splice(i--,1);
            }
        }
        if(list.length){
            for(var i=0;i<event.num;i++){
                cards.push(game.createCard(list.randomGet()));
            }
            player.directgain(cards);
        }
    },
                ai:{
                    order:8,
                    result:{
                        player:1,
                    },
                },
            },
            "tihuan_xiaohun":{
                trigger:{
                    global:["loseEnd","cardsDiscardEnd"],
                },
                forced:true,
                charlotte:true,
                filter:function (event, player) {
        var cs = event.card;
        if (cs.storage.yihuan) return true;
        return false;
    },
                forceDie:true,
                content:function () {
        var list = [];
        var cs = trigger.card;
        if (cs.storage.nigong) {
                list.push(cs);
            }
        game.log(list, '被销毁了');
        game.cardsGotoSpecial(list);
    },
                sub:true,
            },
            xiangying:{
                trigger:{
                    global:["chooseToRespondBegin"],
                },
                forced:true,
                filter:false,
                mod:{
                    "cardEnabled2":function(card){
        if(card.color == get.color(event.card))
              return true;
        else
            return false;
        },
                },
            },
            kezhi:{
                enable:"phaseUse",
                filter:function (event,player){
        return game.hasPlayer(function(current){
            return ['Cronicle'].contains(current.name)||['Cronicle'].contains(current.name2);
        })?true:false;
    },
                limited:true,
                skillAnimation:true,
                animationColor:"orange",
                check:function (event,player){
        return Math.random()<0.5;
    },
                priority:888,
                contentBefore:function (){
        game.playwuming("无敌玩家音效");//这里写音效名字
        game[otherFunction[8]](game.wumingGif('无敌玩家动画.gif',null,null,true),27500);
    },
                content:function (){
        'step 0'
        player.say("黄金闪耀的无敌玩家！");
        player.init('hypermitike');
        'step 1'
        game.saveConfig('ark_backgroundmusic','无敌玩家战斗曲');
        game.wumingBgm();
    },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player,skill){
        player.storage[skill]=false;
    },
            },
            "liquanqing_sanyao":{
                audio:"ext:无名:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function(card,player,target){
        return target.isMaxHp();
    },
                filter:function(event,player){
        return player.countCards('he')>0;
    },
                check:function(card){return 7-get.value(card);},
                position:"he",
                filterCard:true,
                content:function(){
        'step 0'
        target.damage('nocard');
 //       if(!target.countGainableCards(player,'ej')){
//            target.damage('nocard');
//            event.finish();
//        }
        'step 1'
        if(target.countGainableCards(player,'ej') && get.distance(player,target)<=1){
            player.gainPlayerCard(target,'ej',true);
        }
        'step 2'
        if(target.countCards('h') == player.countCards('h')){
            target.draw();
            target.addTempSkil("sub_shengyu",{target:'phaseAfter'});
        }
    },
                ai:{
                    result:{
                        target:function(player,target){
                if(target.countCards('j')&&get.attitude(player,target)>0){
                    return 1;
                }
                if(target.countCards('e')){
                    return -1;
                }
                return get.damageEffect(target,player);
            },
                    },
                    order:7,
                },
            },
            pofang:{
                trigger:{
                    player:"damageEnd",
                },
                filter:function(event,player){
        return (event.source==player);
    },
                logTarget:"source",
                preHidden:true,
                content:function(){
        player.recover();    
    },
            },
            "kabuto_clockup":{
                audio:"ext:无名:2",
                trigger:{
                    global:"judgeEnd",
                },
                filter:function(event,player){
        return event.result;
    },
                check:function(event,player){
        return event.result.judge*get.attitude(player,event.player)<=0;
    },
                content:function(){
        'step 0'
        var evt=trigger.getParent();
        if(evt.name=='phaseJudge') evt.excluded=true;
        else{
            evt.finish();
            evt._triggered=null;
        }
        var list=[];
        list.push(0);
        list.push(1);
        if(list.length==2) player.chooseControl().set('choiceList',[
            '获得'+get.translation(trigger.result.card),
            '使用一张无视距离的火【杀】',
        ]).set('choice',(get.effect(trigger.player,{name:'sha'},player,player)>0)?1:0);
        else event.finish();
        'step 1'
        if(result.index==0) player.gain(trigger.result.card,'gain2');
        else player.chooseUseTarget({name:'sha'},'是否视为使用一张【杀】？',false,'nodistance');
        'step 2'
        player.draw();
    },
            },
            castoff:{
                audio:"ext:无名:2",
                trigger:{
                    global:"gainAfter",
                    player:["damageEnd","loseAfter"],
                },
                frequent:true,
                filter:function(event,player){
        if(event.name=='damage') return true;
        if(player==event.player) return false;
        var evt=event.getl(player);
        return evt&&evt.cards2&&evt.cards2.length>0;
    },
                content:function(){
        'step 0'
        player.draw();
        'step 1'
        player.judge();
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    threaten:1.2,
                },
            },
            dihuang:{
                trigger:{
                    global:"phaseEnd",
                },
                filter:function(event,player,trigger){
        return _status.currentPhase!=player ;
    },
                content:function(){
      player.discard(player.getCards('hj'));        
    },
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
            },
        },
        translate:{
            "界激昂":"界激昂",
            "界激昂_info":"每当你使用（指定目标后）或被使用（成为目标后）红色牌时，你可以摸一张牌。",
            "界权计":"界权计",
            "界权计_info":"出牌阶段结束时，若你的手牌数大于体力值，或当你受到1点伤害后，你可以摸两张牌，然后将一张手牌置于武将牌上，称为“权”；你的手牌上限+X（X为“权”的数量的两倍）。",
            "界筹策":"界筹策",
            "界筹策_info":"当你受到1点伤害后，你可以判定，若结果为：黑色，你弃置一名角色区域里的一张牌；红色，你选择一名角色，其摸两张牌，若其是〖先辅〗选择的角色，改为其摸三张牌。",
            "my_shenwei":"神威",
            "my_shenwei_info":"锁定技，摸牌阶段摸牌时，你额外摸两张牌；你的手牌上限为你的体力值+2,你的出杀次数+1。",
            fushen:"扶神",
            "fushen_info":"限定技。回合开始时，你可以从X张神势力武将牌中选择并获得至多三个技能（限定技、觉醒技、隐匿技、使命技、主公技除外）。若此时你是体力值最低的角色，你回复1点体力（X为场上角色数+3，且X∈[6,+∞)）。",
            lidao:"古刀",
            "lidao_info":"锁定技，若你的武器栏没有被废除，则你视为装备着【古锭刀】。",
            "juejing_wuming":"绝境",
            "juejing_wuming_info":"锁定技，你的手牌上限+3；当你进入，脱离濒死状态和受到伤害前，你摸一张牌。",
            "laopo_yijue":"义绝",
            "laopo_yijue_info":"出牌阶段限一次，你可以弃置一张牌再摸一张并令一名有手牌的其他角色展示一张手牌。令目标角色非Charlotte技失效直至回合结束。若此牌为黑色，则该角色不能使用或打出牌，若此牌为红色，则你可以获得此牌，并可以令其回复一点体力。然后你摸一张牌。",
            "wuming_shenzhu":"神域",
            "wuming_shenzhu_info":"当你使用非转化的杀指定目标时，你可以选择一项 (1):摸一张牌，本回合出杀次数+1。 (2):摸五张牌，本回合不能出杀但手牌上限+3。",
            "sub_shengyu":"神域2",
            "sub_shengyu_info":"手牌上限+3",
            wuhujiang:"五虎上将蕃旗",
            "wuhujiang_info":"准备阶段，若你已受伤。你可令一名其他角色选择一项(1):获得〖咆哮〗并摸三张牌。(2):获得〖龙胆〗，〖烈弓〗。然后你获得〖义绝〗、〖武圣〗和〖铁骑〗。",
            julizhisheng:"御马",
            "julizhisheng_info":"锁定技，你装备区内的防具和防御马不能被其他角色弃置，你与其他人的距离锁定+1且-1。",
            "wuming_tieji":"铁骑",
            "wuming_tieji_info":"当你使用【杀】指定一名角色为目标后，你可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
            "machao_shengwei":"神威",
            "machao_shengwei_info":"出牌阶段限一次，你可以与一名其他角色拼点，此后你的杀无视防具。若你赢，你可以出一张无视距离的虚拟杀(不计入出杀次数)且摸三张牌。若你没赢，你与拼点的人各摸三张牌，本回合你的手牌上限+3但无法出杀。",
            "new_wuhujiang":"五虎上将大旗",
            "new_wuhujiang_info":"准备阶段，你可以判定，若为红色，你可令一名其他角色选择一项(1):本轮获得〖咆哮〗并摸三张牌。(2):本轮获得〖龙胆〗，〖烈弓〗。然后你本轮从〖龙胆〗、〖咆哮〗、〖武圣〗、〖烈弓〗和〖铁骑〗中随机获得两个技能。若为黑色，你摸一张牌。",
            "wuming_tiandu":"天妒",
            "wuming_tiandu_info":"当你的判定牌生效后，你可以获得之，然后再摸一张牌。",
            "wuming_fuwei":"扶魏",
            "wuming_fuwei_info":"限定技。回合开始时，你可以从X张魏势力武将牌中选择并获得至多三个技能（限定技、觉醒技、隐匿技、使命技、主公技除外）。若此时你是体力值最低的角色，你回复1点体力（X为场上角色数+3，且X∈[6,+∞)）。",
            "wuming_yijue":"义绝2",
            "wuming_yijue_info":"",
            shuiyan:"水淹七军",
            "shuiyan_info":"出牌阶段，你可以弃一张牌视为使用一张虚拟的【水淹七军】。",
            "wuming_wusheng":"武圣",
            "wuming_wusheng_info":"你可以用任意牌当做【杀】使用或打出。你的♦杀无视距离,♣杀额外选择目标,♥杀伤害+1,♠杀无法响应。",
            "wuming_wushengnew":"武圣2",
            "wuming_wushengnew_info":"",
            "wuming_wusheng3":"武圣3",
            "wuming_wusheng3_info":"",
            "wuming_linglong":"玲珑狮蛮带",
            "wuming_linglong_info":"当其他角色使用牌指定你为唯一目标后，你可以进行一次判定，若判定结果为红桃，则此牌对你无效。",
            "wuming_shiting":"世界",
            "wuming_shiting_info":"出牌阶段开始时，你可以令所有其他角色本回合被时停(不能打出手牌和使用技能),你可以随意攻击(你的出牌不限制距离)。",
            "niuege_shijie":"世界",
            "niuege_shijie_info":"",
            niugeshijieour:"世界",
            "niugeshijieour_info":"你的杀无距离限制",
            huisu:"回溯",
            "huisu_info":"准备阶段，若你的体力值小于上回合，你可以发动败者食尘，回溯时间(你可以将场上所有人的牌回溯到上一个回合，你回复至上个回合的体力值并扣除一滴体力上限)。",
            "wuming_huisu2":"回溯2",
            "wuming_huisu2_info":"",
            "wuming_huisu":"回溯",
            "wuming_huisu_info":"",
            aiguo:"爱国",
            "aiguo_info":"每轮开始时和结束阶段，你可以自由的在魏、蜀、吴和群势力中自由切换(在吴国是吴国人，在魏国是魏国人！)。",
            gusheng:"捞金",
            "gusheng_info":"结束阶段，你可以摸X张牌（X为与你同势力的人数）。",
            shoudu:"酸鸡",
            "shoudu_info":"锁定技，你受到同势力的角色和你对不同势力的角色伤害+1。",
            duanzao:"神锻",
            "duanzao_info":"出牌阶段限两次,你可以使用一张非基本牌锻造一件装备置入场上任意人的区域内，你制作的装备进入弃牌堆时，销毁之。",
            shijian:"鹰瞳",
            "shijian_info":"锁定技，你的杀无距离限制；当你杀的目标有防具时，你的杀不可闪避；",
            "duanzao_destory":"销毁",
            "duanzao_destory_info":"",
            "wuming_wuxingshan":"五行扇",
            "wuming_wuxingshan_info":"",
            "wuming_fencheng":"焚城",
            "wuming_fencheng_info":"限定技。出牌阶段，你可以令所有其他角色各选择一项：弃置至少X张牌(X为该角色的上家以此法弃置牌的数量+1)；或受到你对其造成的3点火焰伤害。",
            xingxi:"星息",
            "xingxi_info":"锁定技，你的阵营锁定为神。当你在场时，所有人的势力都改为神阵营。",
            wuxianjianzhi:"剑制",
            "wuxianjianzhi_info":"限定技，当你装备栏的装备超过或等于三个时可以发动，修改场地和BGM，指定任意多人拉入无限剑制之中(对所有指定的人造成一点伤害，摸牌数-1，手牌上限固定为体力上限)。你解除你的所有弱化状态。<br>获得【神锻】技能：<br>出牌阶段限两次,你可以使用一张非基本牌锻造一件装备置入场上任意人的区域内，你制作的装备进入弃牌堆时，销毁之。(若处于结界内，【神锻】技能会获得强化，去掉“非基本”描述，并将使用次数改为三次)<br>当你的体力值大于或等于一时，结界会主动解除，恢复原本的背景和BGM，你恢复一点体力同时其他脱离结界的人再受到一点伤害。<br><br><b><i>被具象化的世界是有着无数无主的剑之墓碑的红色荒野，作为地平线而出现的是跃动的火焰，远处交织着数个巨大的齿轮。这个结界可以复制曾经见过的武器，保管于结界内。在第五次圣杯战争的时候，就储存着超过千把的武具。卫宫他能够因应状况自由取出并使用那些武器。虽然名义上是宝具，不过正确来说是被称为固有结界的大魔术。</r></b>",
            jianzhi:"剑制",
            "jianzhi_info":"摸牌数-1，手牌上限固定为体力上限。",
            "jianzhi3":"剑制",
            "jianzhi3_info":"",
            "duanzao2":"神锻",
            "duanzao2_info":"",
            yingtong:"鹰瞳",
            "yingtong_info":"",
            "xin_xiaohui":"销毁",
            "xin_xiaohui_info":"",
            zhengzu:"真祖",
            "zhengzu_info":"锁定技，你的手牌上限+X(X为\"神\"势力阵营数)，摸牌阶段，你放弃摸牌，转为展示排队顶四张牌获得之；你始终跳过判定阶段。你在场时，删除濒死结算(体力值为0时直接死亡)。",
            "zhengzu2":"真祖",
            "zhengzu2_info":"",
            yueji:"月姬",
            "yueji_info":"限定技，你可以改变场地为千年城并修改BGM，指定任意多人拉入其中。<br>对所有指定的人造成一点伤害，摸牌数-1。回合结束时需要选择一项<br>（1）流失一点体力。<br>（2）弃一张牌。<br>千年城内的人对你使用牌需要判定，若为红色，取消你为目标。<br>你的结界不会被击破。",
            qianniancheng:"千年城",
            "qianniancheng_info":"",
            "qianniancheng2":"千年城",
            "qianniancheng2_info":"",
            "qianniancheng3":"千年城",
            "qianniancheng3_info":"",
            "zhengzhu3":"真祖",
            "zhengzhu3_info":"",
            henshi:"变身",
            "henshi_info":"当你濒死时，你可以将体力恢复至3，重置角色所有状态，变身卡面来打克洛诺斯！",
            touying:"投影",
            "touying_info":"每个人的回合结束时，若其有装备牌，你可以投影一张其区域内一样的装备牌置于场上任意人的区域内，当你制作的牌进入弃牌堆时，销毁之。",
            "touying_xiaohui":"销毁",
            "touying_xiaohui_info":"",
            "wuming_guanxing":"观星",
            "wuming_guanxing_info":"准备阶段和结束阶段，你可以观看牌堆顶的5张牌，并将其以任意顺序置于牌堆项或牌堆底。",
            "wuming_kanpo":"看破",
            "wuming_kanpo_info":"一轮限一次，当有人用牌指定唯一目标时，你可以弃一张牌(若你没牌则不弃)，取消该目标。",
            cijia:"刚猛",
            "cijia_info":"当你受到1点伤害后，你可进行判定，若结果为：红色，你对伤害来源造成2点伤害；黑色，你弃置伤害来源一张牌然后你摸一张牌。",
            fuwu:"扶吴",
            "fuwu_info":"回合开始时，你可以从X张吴势力武将牌中选择并获得至多两个技能（限定技、觉醒技、隐匿技、使命技、主公技除外）。若此时你是体力值最低的角色，你回复1点体力（X为场上角色数，且X∈[4,+∞)）。",
            mutieke:"无敌",
            "mutieke_info":"<font color=#CD7F32>(1)该技能不会因外力失效。(譬如【铁骑】，【设伏】等技能)<br>(2)你免疫一切伤害。<br>(3)你的体力上限不会改变，你不会体力流失。<br>(4)每名角色开始时或你死亡时，你检查所有人的合法性，若不合法，强制停止本场游戏。</font>",
            mitike:"无敌",
            "mitike_info":"",
            "mitike4":"无敌",
            "mitike4_info":"",
            "mutike5":"无敌",
            "mutike5_info":"",
            riderkick:"终结",
            "riderkick_info":"锁定技，你的的杀无距离次数限制，当你造成伤害时，防止此伤害，使对方增加一个‘Hit’标记，其回合开始时，若该标记数大于其体力值，其死亡。",
            hitkick:"Hit",
            "hitkick_info":"",
            kick:"HitKick",
            "kick_info":"",
            jiayu:"驾驭",
            "jiayu_info":"出牌阶段，你可以变身成任意的假面骑士并使用其所有技能。",
            decadekick:"帝骑",
            "decadekick_info":"你可以摸3张牌。",
            "wuming_liegong":"烈弓",
            "wuming_liegong_info":"你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标；当你使用【杀】指定一个目标后，其手牌数小于等于你的手牌数，此【杀】不可被【闪】响应，然后你翻开牌堆顶3张牌，每有一种不同的花色，你可以令你的杀伤害加一，并摸不同花色种类的牌数。",
            "wuming_huoji":"火计",
            "wuming_huoji_info":"当你失去最后一张红色手牌时，你可以立刻对一名角色分配一点火属性伤害。",
            startup:"加速",
            "startup_info":"你可以失去一点体力，随后你切换到加速模式直至回合结束(普通锦囊牌和基本牌可以额外指定一个目标，你的杀无距离限制)。",
            clockup:"加速",
            "clockup_info":"随后你的普通锦囊牌和基本牌可以额外指定一个目标，你的杀无距离限制。",
            "wuming_jianji":"剑击",
            "wuming_jianji_info":"当你对一名角色造成伤害时，你可以令此次伤害无效，其摸一张牌并翻面。",
            luguo:"路过",
            "luguo_info":"登场时，你将势力改成神。",
            "decade_henshi":"变身",
            "decade_henshi_info":"变身成为帝骑。",
            shanji:"闪击",
            "shanji_info":"若你在回合外打出或使用了一张牌，你可以立刻摸一张牌并出一张杀。",
            "jian_cards":"卡",
            "jian_cards_info":"",
            tigahenshi:"光",
            "tigahenshi_info":"濒死或出牌阶段时，你可以恢复三点体力，摸三张牌，然后变成迪迦奥特曼。",
            jianming:"捡命",
            "jianming_info":"锁定技，你的手牌上限为你的体力上限。当你濒死时进行判定，若不为❤,你将体力恢复至1并摸一张牌。",
            information:"加速完毕",
            "information_info":"",
            maoshetou:"猫舌",
            "maoshetou_info":"锁定技，你受到火属性伤害加一，非火属性伤害时，你可以摸一张牌。",
            "blade_chongsheng":"帝皇",
            "blade_chongsheng_info":"限定技，当且仅当处于濒死状态且你已经拥有13张卡片才可用，你将体力和体力上限变更置且丧失除【剑击】，【反击】外的所有技能和其他所有状态和技能。获得技能【剑帝】,【神剑】。",
            wmjiandi:"剑帝",
            "wmjiandi_info":"当你使用杀指定目标时，你可以发动高级破军。",
            "wmjiandi_2":"剑帝",
            "wmjiandi_2_info":"",
            "wuming_yingyuan":"应援",
            "wuming_yingyuan_info":"你可以将你使用过的牌（每种牌名限一次交给别人）。",
            shenjian:"神剑",
            "shenjian_info":"你手牌中的杀强制视为神属性。",
            yihuan:"移换",
            "yihuan_info":"出牌阶段限一次，你可以将你手牌里所有基本牌替换为锦囊牌。",
            "tihuan_xiaohun":"销毁",
            "tihuan_xiaohun_info":"",
            xiangying:"响应",
            "xiangying_info":"锁定技，你打出的牌和你响应别人的牌都需要使用相同的花色来响应。",
            kezhi:"变身",
            "kezhi_info":"限定技，游戏开始和每个回合开始时，如果场上存在克诺洛斯，则你可以发动变身，成为无敌玩家！",
            "liquanqing_sanyao":"散谣",
            "liquanqing_sanyao_info":"你可以弃置一张手牌对体力值最低的人造成一点伤害。",
            pofang:"破防",
            "pofang_info":"回复一点体力。",
            "kabuto_clockup":"加速",
            "kabuto_clockup_info":"你可以终止一切判定，并选择出杀。",
            castoff:"爆甲",
            "castoff_info":"当你受到伤害或手牌被获得时，可以进行一次判定。",
            dihuang:"帝皇",
            "dihuang_info":"每个人的回合结束时，若其有装备牌，你可以投影一张其区域内一样的装备牌置于场上任意人的区域内，当你制作的牌进入弃牌堆时，销毁之。",
        },
    },
    intro:"自己玩的一些技能,现还在做假面骑士呢。",
    author:"卫宫",
    diskURL:"",
    forumURL:"",
    version:"1.4",
},files:{"character":["神·乔梁.jpg","wuming_guanyu.jpg","wuming_liubei.jpg","wuming_huangzhong.jpg","wuming_machao.jpg","my_lianyishi.jpg","build.jpg","decade_man.jpg","wuming_guailin.jpg","Archetype.jpg","decade.jpg","kabuto.jpg","kugga.jpg","re_weigong.jpg","blade.jpg","wuming_meiluxingnew.jpg","my_weigong.jpg","kingform.jpg","faizaccel.jpg","wuming_artly.jpg","king.jpg","my_tosaka.jpg","faiz.jpg","jie_weigong.jpg","Cronicle.jpg","mogeng.jpg","wuming_zhugeliang.jpg","hypermitike.jpg","wuming_taoye.jpg","shui_liquanqing.jpg"],"card":["wuxing_xiangheshan.png"],"skill":[]}}})