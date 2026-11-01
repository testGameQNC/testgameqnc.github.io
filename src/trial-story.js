/* 试玩版独立剧情数据：仅包含序章与第一章可接触到的资料。 */
Y2K.patch(D => Object.assign(D, {
  "chapters": [
    {
      "id": "ch0",
      "num": "序章",
      "name": "六张盘",
      "date": "2026-12-20",
      "time": "21:30",
      "trigger": "start",
      "intro": "2026年12月20日，晚上。梧城下了今冬第一场雪。<br><br>七中那期视频上线两周，找你修电脑的人多了一倍。<br><br>今晚的委托来自一家上市在即的公司。东西却是一位老先生送来的：一个生了锈的铁盒。"
    },
    {
      "id": "ch1",
      "num": "第一章",
      "name": "封条",
      "date": "2026-12-21",
      "time": "10:00",
      "trigger": "dlg_c0_end",
      "intro": "江老师说，那天是他亲手封的，五个孩子一人一张。<br><br>那第六张是谁放进去的？什么时候放进去的？<br><br>胶囊封存那晚，有人拿着家用摄像机，录下了整个仪式。"
    }
  ],
  "files": [
    {
      "id": "d_caps",
      "path": "C:/胶囊软盘",
      "type": "folder",
      "date": "2026-12-20 22:10",
      "requires": "ch0"
    },
    {
      "id": "d_d1",
      "path": "C:/胶囊软盘/盘1（蓝·陈一鸣）",
      "type": "folder",
      "date": "1999-12-31 22:10",
      "requires": "ch0"
    },
    {
      "id": "d_d2",
      "path": "C:/胶囊软盘/盘2（黑·赵小川）",
      "type": "folder",
      "date": "1999-12-31 22:12",
      "requires": "ch0"
    },
    {
      "id": "d_d3",
      "path": "C:/胶囊软盘/盘3（白·白露）",
      "type": "folder",
      "date": "1999-12-31 22:15",
      "requires": "ch0"
    },
    {
      "id": "d_d4",
      "path": "C:/胶囊软盘/盘4（绿·孟凡）",
      "type": "folder",
      "date": "1999-12-31 22:18",
      "requires": "ch0"
    },
    {
      "id": "d_d5",
      "path": "C:/胶囊软盘/盘5（粉·米乐）",
      "type": "folder",
      "date": "1999-12-31 22:20",
      "requires": "ch0"
    },
    {
      "id": "d_d6",
      "path": "C:/胶囊软盘/盘6（无标签）",
      "type": "folder",
      "date": "2026-12-20 22:30",
      "requires": "ch0"
    },
    {
      "id": "d_work",
      "path": "C:/工作",
      "type": "folder",
      "date": "2026-12-20 22:00",
      "requires": "ch0"
    },
    {
      "id": "f_d6_dir",
      "path": "C:/胶囊软盘/盘6（无标签）/目录.txt",
      "type": "txt",
      "date": "2026-12-20 22:30",
      "requires": "ch0",
      "props": {
        "来源": "读盘机做镜像时的目录读取结果"
      },
      "text": "盘6（无标签）· 镜像读取结果\n\n卷标：（无）\n卷序列号：041A-152C\n制作工具：QNP-FMT 1.0（少年宫制盘程序）\n制作年份：2003（扩展记录可读，校验通过）\n\n文件名        大小    日期        状态\nLETTER.TXT    4,612   ??-??-??    坏道，无法读取\nCONFESS.TXT   2,708   ??-??-??    坏道，无法读取\nCHAT.LOG      2,644   ??-??-??    坏道，无法读取\nFOUND.TXT     2,980   ??-??-??    坏道，无法读取\n\n目录区受损，文件日期读不出来。\n盘面有划痕，像是被用力塞进过一个太紧的地方。"
    },
    {
      "id": "f_d1_letter",
      "path": "C:/胶囊软盘/盘1（蓝·陈一鸣）/给2026年的我.txt",
      "type": "txt",
      "date": "1999-12-31 22:10",
      "requires": "ch0",
      "text": "2026年的陈一鸣：\n\n我是除虫小队队长陈一鸣。今天是1999年12月31日，我们刚帮卫生站查完电脑。\n\n我想你已经开了自己的公司，有很多电脑，再也不用抢少年宫那台奔腾了。\n\n今晚我要上楼顶拍倒计时，那是全梧城最好的位置。等四十岁的时候，我请他们四个吃饭。\n\n队长 陈一鸣"
    },
    {
      "id": "f_d1_sheet",
      "path": "C:/胶囊软盘/盘1（蓝·陈一鸣）/千年虫自查表（空白）.txt",
      "type": "txt",
      "date": "1999-12-12 16:30",
      "requires": "ch0",
      "text": "千年虫自查表　梧城少年宫 · 除虫小队\n\n检查人：________　地点：________　时间：________\n\n□ 1. BIOS 日期能不能跳到2000年\n□ 2. 系统日期是不是四位年份\n□ 3. 打补丁（光盘：千年虫补丁 v2.1）\n□ 4. 重启以后再看一次\n\n修好了，签自己的名字。没修好，也签自己的名字，写上为什么。\n\n——许嘉　1999.12.12"
    },
    {
      "id": "f_d1_hidden",
      "path": "C:/胶囊软盘/盘1（蓝·陈一鸣）/队长守则.txt",
      "type": "txt",
      "date": "1999-12-31 22:11",
      "requires": "ch0",
      "hidden": true,
      "onOpen": {
        "collect": "p_chen"
      },
      "text": "（隐藏文件）\n\n四十岁的陈一鸣：别光顾着赢。"
    },
    {
      "id": "f_d2_letter",
      "path": "C:/胶囊软盘/盘2（黑·赵小川）/给2026年的我.txt",
      "type": "txt",
      "date": "1999-12-31 22:12",
      "requires": "ch0",
      "onOpen": {
        "note": "n_f_d2"
      },
      "text": "四十岁的我：\n\n你还在做模型吗？我在做一个天文台，比少年宫楼顶那个大。\n\n今天的铅封模子是我做的，金工课，铜的。我做了两个，一个给江老师，一个我自己留着。等四十岁那天，胶囊打开以后，我要自己再封一次，封给六十岁的我们。\n\n许嘉哥说，修好了要签自己的名字。我今天修好了两台，签了两次。\n\n赵小川"
    },
    {
      "id": "f_d2_hidden",
      "path": "C:/胶囊软盘/盘2（黑·赵小川）/背面.txt",
      "type": "txt",
      "date": "1999-12-31 22:13",
      "requires": "ch0",
      "hidden": true,
      "onOpen": {
        "collect": "p_xiaochuan"
      },
      "text": "（隐藏文件）\n\n四十岁的赵小川：别怕说真话。"
    },
    {
      "id": "f_d3_letter",
      "path": "C:/胶囊软盘/盘3（白·白露）/给2026年的我.txt",
      "type": "txt",
      "date": "1999-12-31 22:15",
      "requires": "ch0",
      "onProps": {
        "collect": "p_bailu"
      },
      "props": {
        "作者": "白露",
        "备注": "四十岁的白露：别替别人做决定。"
      },
      "text": "2026年的白露：\n\n你当上医生了吗？我想当医生，因为医生可以把坏掉的东西修好，跟我们修电脑一样。\n\n今天在卫生站，护士阿姨说有个张奶奶每天晚上靠电脑打电话提醒吃药。我们查的就是那台电脑。\n\n希望四十岁的时候，我们五个还在一起。\n\n白露"
    },
    {
      "id": "f_d4_letter",
      "path": "C:/胶囊软盘/盘4（绿·孟凡）/给2026年的我.txt",
      "type": "txt",
      "date": "1999-12-31 22:18",
      "requires": "ch0",
      "text": "四十岁的孟凡：\n\n你开上大卡车了吗？我爸说开卡车能去很远的地方。\n\n今天在卫生站，前台那台电脑是我跟一鸣查的。我外婆一个人住在卫生站后头，每天晚上八点，卫生站的电脑打电话提醒她吃心脏的药。护士阿姨说，就是从这台电脑录进去的。\n\n一鸣签字签得最快，他说他要去楼顶拍倒计时，让我先走。\n\n孟凡"
    },
    {
      "id": "f_d4_hidden",
      "path": "C:/胶囊软盘/盘4（绿·孟凡）/我爸.txt",
      "type": "txt",
      "date": "1999-12-31 22:19",
      "requires": "ch0",
      "hidden": true,
      "onOpen": {
        "collect": "p_mengfan"
      },
      "text": "（隐藏文件）\n\n四十岁的孟凡：少喝酒。我爸就是喝酒才天天吵架的。"
    },
    {
      "id": "f_d5_letter",
      "path": "C:/胶囊软盘/盘5（粉·米乐）/给2026年的我.txt",
      "type": "txt",
      "date": "1999-12-31 22:20",
      "requires": "ch0",
      "text": "亲爱的四十岁的米乐：\n\n我的盘是粉色的！\n\n你当上老师了吗？要对每个学生都好，特别是不爱说话的那种。\n\n我们五个说好了，四十岁的时候一起打开这个盒子。一个都不能少。\n\n米乐"
    },
    {
      "id": "f_d1_plan",
      "path": "C:/胶囊软盘/盘1（蓝·陈一鸣）/倒计时拍摄计划.txt",
      "type": "txt",
      "date": "1999-12-28 21:30",
      "requires": "ch0",
      "text": "千禧倒计时 拍摄计划（导演：陈一鸣）\n\n机位：少年宫楼顶，东南角栏杆（能同时拍到七中和电视塔）\n器材：爸爸的 DV，电池两块，带子一盘（60分钟）\n\n12.31\n21:00　卫生站查电脑（江老师派的，快点弄完）\n21:40　上楼顶占机位！！！晚了就被高中生占了\n23:30　下楼放盘、封胶囊（不能缺席，我是队长）\n23:40　回楼顶\n23:59:50　开拍，倒数十秒\n00:00　烟花\n\n备注：孟凡负责举电筒。"
    },
    {
      "id": "f_d1_company",
      "path": "C:/胶囊软盘/盘1（蓝·陈一鸣）/我的公司.txt",
      "type": "txt",
      "date": "1999-12-30 20:15",
      "requires": "ch0",
      "text": "以后我要开一家公司。\n\n名字：鸣远（一鸣惊人，远走高飞）\n标志：一个“鸣”字，口字旁画成一台摄像机的镜头\n口号：先赢再说\n\n第一个员工：孟凡（他说他要开卡车，那就给公司开车）\n第二个员工：小川（做道具）\n白露当公司医生。米乐负责发瓜子。\n\n——陈一鸣 1999.12.30"
    },
    {
      "id": "f_d2_mold",
      "path": "C:/胶囊软盘/盘2（黑·赵小川）/模子图纸.txt",
      "type": "txt",
      "date": "1999-12-18 17:00",
      "requires": "ch0",
      "onProps": {
        "collect": "p_star6"
      },
      "props": {
        "作者": "赵小川",
        "备注": "图纸右下角画着一小团星星：昴星团，七姐妹。旁边写：七颗，我只数得出六颗。"
      },
      "text": "铅封模子 图纸（金工课作业）\n\n材料：黄铜圆棒，直径 45mm，长 30mm\n字：梧城少年宫 1999.12.31\n注意！！！字要反着刻，压出来才是正的。\n\n深度 0.8mm。“9”的尾巴最细，最容易崩，刻的时候慢一点。\n\n做两个。\n一个给江老师封胶囊用。\n一个我自己留着，等四十岁那天，胶囊打开以后，我们再封一次。"
    },
    {
      "id": "f_d2_star",
      "path": "C:/胶囊软盘/盘2（黑·赵小川）/星图.txt",
      "type": "txt",
      "date": "1999-12-31 22:14",
      "requires": "ch0",
      "hidden": true,
      "onOpen": {
        "collect": "p_star3"
      },
      "text": "（隐藏文件）\n\n北极星。\n它不动，别的星都绕着它转。\n迷路了就找它。\n\n等我们四十岁，我想做一个比少年宫楼顶大十倍的天文台，带他们四个去看。"
    },
    {
      "id": "f_d2_plan2000",
      "path": "C:/胶囊软盘/盘2（黑·赵小川）/2000年要看的.txt",
      "type": "txt",
      "date": "1999-12-31 22:13",
      "requires": "ch0",
      "text": "2000年要看的：\n\n1. 1月21日 月全食（要早起，大概中午……不对，是北京时间中午，看不到。算了）\n2. 夏天的银河，去东湖那边，没有路灯\n3. 狮子座流星雨（东湖钓叟爷爷说2001年最多）\n4. 我的生日 4月26日，晚上看猎户座最后一眼\n\n修好了，签自己的名字：赵小川"
    },
    {
      "id": "f_d3_questions",
      "path": "C:/胶囊软盘/盘3（白·白露）/我的问题本.txt",
      "type": "txt",
      "date": "1999-12-26 21:00",
      "requires": "ch0",
      "text": "问题本（问许嘉哥和江老师的）\n\n1. 为什么不一开始就存四位？——省两个字节。七十年代很贵。\n2. 如果零点以后机器坏了，谁负责？——江老师说：签字的人负责。\n3. 卫生站那台电脑，是它自己打电话吗？——许嘉哥说，不是，前台只是窗口。我还没听懂。\n4. 医生和修电脑的人，哪个更厉害？——许嘉哥说，都一样，都要先查清楚，再签字。\n\n还没问的：\n5. 张奶奶的电话，会不会响？"
    },
    {
      "id": "f_d4_grandma",
      "path": "C:/胶囊软盘/盘4（绿·孟凡）/外婆的电话.txt",
      "type": "txt",
      "date": "1999-12-26 20:30",
      "requires": "ch0",
      "text": "外婆耳朵背。电话要响十声，她才走得到。\n护士阿姨说，不怕，电脑会一直打，一晚上打三遍。\n\n外婆说，电话一响，她就知道八点了，该吃药了，也知道有人还记得她。\n\n千禧年以后，我想给外婆买一个大声的电话。等我开上卡车，第一个拉她去东湖。"
    },
    {
      "id": "f_d5_list",
      "path": "C:/胶囊软盘/盘5（粉·米乐）/一个都不能少.txt",
      "type": "txt",
      "date": "1999-12-31 22:21",
      "requires": "ch0",
      "text": "除虫小队 生日表（米乐整理）\n\n陈一鸣　9月14日　爱吃：辣条\n孟凡　　7月18日　爱吃：外婆包的饺子\n白露　　11月8日　爱吃：话梅\n赵小川　4月26日　爱吃：什么都行，给他就吃\n米乐　　5月20日　爱吃：瓜子（我自己）\n\n规矩：谁过生日，其他四个人都要到。一个都不能少。"
    },
    {
      "id": "f_d5_tape",
      "path": "C:/胶囊软盘/盘5（粉·米乐）/录像带目录.txt",
      "type": "txt",
      "date": "1999-12-31 22:22",
      "requires": "ch0",
      "text": "我爸的录像带（家里柜子第二层）\n\n1. 1997 春节\n2. 1998 我上计算机班\n3. 1999.12.31 少年宫胶囊（我爸拍！我负责举话筒）\n\n我爸说，录像机右下角的时间要对准，不然以后谁也不信。我们对了三遍。"
    },
    {
      "id": "f_d3_diary",
      "path": "C:/胶囊软盘/盘3（白·白露）/日记 1231.txt",
      "type": "txt",
      "date": "1999-12-31 22:16",
      "requires": "ch0",
      "text": "1999年12月31日　晴　冷\n\n今天去卫生站。前台那台电脑是一鸣和孟凡查的。我在旁边看刘阿姨教我们怎么录提醒。\n\n一鸣九点二十就签了字。他说他要去楼顶占机位。我看见那台电脑屏幕上的日期，还是他开机时候那个，他没有重启。\n\n我想说。我没说。\n\n许嘉哥说，没修好，也要签自己的名字，写上为什么。可是没修好的不是我，签字的也不是我。那我该签什么？\n\n明天，我去跟一鸣说，让他回去再查一遍。\n\n现在要去封胶囊了。写给四十岁的我：你当上医生了吗？"
    },
    {
      "id": "f_d4_draw",
      "path": "C:/胶囊软盘/盘4（绿·孟凡）/画（文字说明）.txt",
      "type": "txt",
      "date": "1999-12-31 22:19",
      "requires": "ch0",
      "text": "（这张盘里还存着一张画的扫描，坏了打不开。文件名旁边，孟凡写了说明：）\n\n画的是：一辆大卡车，车斗里坐着外婆，外婆手里拿着一个大电话，电话上写着“八点”。\n车头上写着：孟凡号。\n天上画了五颗星星，最大的那颗旁边写着：小川说这颗叫天狼星。\n\n等我四十岁，我要把这张画给外婆看。"
    },
    {
      "id": "d_klog",
      "path": "C:/工作/读盘记录",
      "type": "folder",
      "date": "2026-12-20 23:59",
      "requires": "ch0"
    },
    {
      "id": "life_f_kelan_receipt",
      "path": "C:/工作/来件/老K/修理单背面.txt",
      "type": "txt",
      "date": "2026-12-21 09:30",
      "requires": "ch1",
      "text": "修理单背面　柯岚留\n\n我今天在柜台收了三台机器，地址已经分别写在袋子上。不要把袋子一拆就堆在一起，再凭记忆找是哪家的电源。靠窗那台属于卖早点的李叔，他说机器不急，里面给孙女存的作文急。听起来跟你这阵子接的事很像，可人家的急也是急，别只顾那几张软盘。\n\n晚上饭放在小锅，热一遍就吃。你上回说忙完吃，忙到我回来，锅还是凉的。炉子别开着就戴耳机，我从门口叫你三遍你都没听见。有人找你取机器，先把手里的螺丝放好再起来，你刚才找的那一颗就在裤脚卷边里。\n\n陈先生送来的纸箱我没拆。收件单夹在右边抽屉。门口那个柜子锁不上了，先别放贵重东西，我约了师傅明天来看。不是让你再加一个活，你要是什么都能自己修，也不能什么都在同一天修。\n\n楼下小孩问你周日有没有空，想拿坏了的游戏机来。你答应帮看一次，别到时候全忘了。他没钱买新的，在门口问了好几回都不敢进去。我说你脸上那副表情不是不欢迎，是看小字看累了，他说知道，下回先敲门。\n\n还有一件事。你拍视频讲机器的时候，可以把话慢一点说。别人听不懂不是没认真听，是你每天摸着这些东西，觉得不用说的步骤太多。今天李叔问了三次“镜像是把照片变大吗”，你回他的时候已经伸手去拿下一件东西了。\n\n药照医生交代的用。没写“记得吃”，因为我知道你会答应。我等你关了店回家，一起吃晚饭。"
    },
    {
      "id": "f_serial_help",
      "path": "C:/工作/卷序列号怎么换算.txt",
      "type": "txt",
      "date": "2024-03-02 23:10",
      "requires": "p2_seal_received",
      "text": "给自己记的：少年宫 QNP-FMT 1.0 制盘记录（只适用于这个程序，不是通用 FAT 规则）\n\nQNP-FMT 把制盘时电脑显示的月日时分写入卷序列号，形如 XXXX-YYYY（十六进制）：\n  前四位 XXXX = 月 × 256 + 日\n  后四位 YYYY = 时 × 256 + 分\n\n例：0C1F-1705\n  0C1F = 3103 = 12 × 256 + 31 → 12月31日\n  1705 = 5893 = 23 × 256 + 5  → 23:05\n\n这个字段不含年份。QNP-FMT 另写一条制作年份，镜像读取结果中会列出。盘片批号只能排除过早的年份，不能证明具体哪年。时间记录还需与文件内容、外部记录核对，不能单凭电脑时钟认定真实发生时间。"
    },
    {
      "id": "handoff_01-封存录像",
      "path": "C:/工作/来件/交接记录/01-封存录像.txt",
      "type": "txt",
      "date": "2026-12-21 10:00",
      "requires": "p2_seal_received",
      "text": "资料交接 · 01-封存录像\n提供者：米乐确认，江振华转交翻录副本；老K保留开箱原片\n\n清单五张、实物六张产生疑问。老K在开箱后提出核对封存过程，次日才收到已为仪式翻录的连续录像。\n\n本次内容：1999年封存原片副本、当次开箱特写、老K已有的QNP-FMT格式说明。"
    }
  ],
  "dialogues": [
    {
      "id": "c0_chen",
      "contact": "chen",
      "trigger": "ch0",
      "steps": [
        {
          "npc": "老K师傅，我叫陈一鸣。七中那期视频是你做的吧？我看了三遍。有几张软盘，想请你帮我看看。"
        },
        {
          "npc": "1999年跨年，我们五个孩子在梧城少年宫封了个时间胶囊。约好四十岁再开，日子都订好了，2027年1月1号零点。"
        },
        {
          "npc": "旧址月底就封了，一月拆完。我们借了新少年宫的礼堂，我公司出钱，到时候还要直播。"
        },
        {
          "npc": "里面每人一张盘，都是小时候写的信。家里连软驱都找不着了，我哪敢当着几万人直接往里塞。大家都答应先开盒，小川家里也点了头。麻烦你从开盒起录下来。跨年那晚我们再把盘拿上台，念信。"
        },
        {
          "me": "行。我先把软盘上的写保护拨好，把能读的都拷出来。真有地方要修，我就在拷贝上修，省得来回折腾原盘。"
        },
        {
          "me": "等信读出来，你们先看看自己那封。愿意在台上念的，到时候再拿出来。"
        },
        {
          "npc": "……你说得对。费用我们出，合同明天发你。"
        },
        {
          "npc": "盒子一直在江老师那儿。他以前教我们电脑，今年七十多了，说今晚给你送过去。"
        }
      ]
    },
    {
      "id": "c0_jiang",
      "contact": "jiang",
      "trigger": "dlg_c0_chen",
      "steps": [
        {
          "npc": "是老K师傅吧？我是江振华，少年宫退休的计算机老师。一鸣跟你说过了吧。"
        },
        {
          "npc": "许嘉我教过，在少年宫。第一次来上课，椅子还得往前拖。后来打字比我都快。你拍的七中那期，我看了。"
        },
        {
          "npc": "二十七年，盒子一直搁储藏室那只铁柜里。钥匙在我这儿，没给过别人。这回要拆，我才去拿。"
        },
        {
          "npc": "到你门口了。封线我剪了，铅块没扔，盖子也还扣着。你开的时候录一下，让几个孩子看看当年的东西。"
        },
        {
          "action": {
            "clock": "2026-12-20 22:00",
            "set": [
              "c0_box"
            ],
            "toast": "江老师把胶囊送来了"
          }
        },
        {
          "npc": "五个孩子里有一个……2003年走了。他那张盘，读的时候轻一点。"
        },
        {
          "npc": "读出什么，也跟我说一声。我老了，就想零点那天，看他们高高兴兴的。"
        }
      ]
    },
    {
      "id": "c0_end",
      "contact": "jiang",
      "trigger": "solved_c0_odd",
      "steps": [
        {
          "me": "江老师，胶囊里有六张盘。清单上只写了五张。"
        },
        {
          "npc": "……六张？不可能。那天是我亲手封的，五个孩子一人一张。"
        },
        {
          "npc": "是不是哪个孩子多塞了一张？他们那时候调皮。"
        },
        {
          "me": "有一张没标签。我先读读看。"
        },
        {
          "npc": "好。读出来告诉我。"
        },
        {
          "me": "能不能找找当年封盒的录像？我想数一下，那天放进去的到底是几张。"
        },
        {
          "npc": "米乐他爸拍的。这回办仪式，他们刚把带子转出来。我先问问米乐，能不能把整段发你。你开箱那段也留着，别光给我拍个铅封。"
        }
      ]
    },
    {
      "id": "p2_seal_delivery",
      "contact": "jiang",
      "trigger": "ch1",
      "steps": [
        {
          "npc": "米乐回我了，说你可以拿1999年封盒那段录像对一对，先别往外放。从头到尾都在这份里，原带还在他家。"
        },
        {
          "me": "收到了。我拿昨天开箱那段跟它对着看，铅封和盘片都拍清楚了。灰盘用的是 QNP-FMT，我手里还有这工具的说明，能查查卷序列号。"
        },
        {
          "action": {
            "set": [
              "p2_seal_received"
            ],
            "toast": "封存录像与开箱核对材料已归档"
          }
        }
      ]
    },
    {
      "id": "c1_chen",
      "contact": "chen",
      "trigger": "solved_c1_frame",
      "steps": [
        {
          "npc": "老K，进展怎么样？"
        },
        {
          "me": "五张彩盘都能读。我正看当年那盘录像，想数数他们到底往盒里放了几张。"
        },
        {
          "npc": "录像？米乐他爸拍的那盘？"
        },
        {
          "npc": "我那天在楼顶，录像里应该没几个我的镜头。"
        },
        {
          "npc": "那张多出来的盘呢？"
        },
        {
          "me": "还在读。"
        },
        {
          "npc": "……读出什么，先告诉我。我是委托人。"
        },
        {
          "me": "陈总，合同第三条你也看过。信上大屏得先问本人。私下给你看也一样，写信的人得说行。"
        },
        {
          "npc": "那条是你加的。行。"
        }
      ]
    },
    {
      "id": "c1_kelan",
      "contact": "kelan",
      "trigger": "solved_c1_serial",
      "steps": [
        {
          "npc": "又接活了？"
        },
        {
          "me": "接了。有人托我读几张软盘，1999年封进时间胶囊的。清单上写了五张，开盒一数，多了一张。"
        },
        {
          "npc": "一听你说“多了一张”，我就想起七中那回了。也是这个口气。"
        },
        {
          "npc": "答应我，这次别再熬到天亮。你上回在工作室晕过去，是我开的门。"
        },
        {
          "me": "知道。药在抽屉里。"
        },
        {
          "npc": "药在抽屉里有什么用。要在你嘴里。"
        }
      ]
    },
    {
      "id": "c1_jiang",
      "contact": "jiang",
      "trigger": "solved_c1_who",
      "steps": [
        {
          "npc": "师傅，读得怎么样？"
        },
        {
          "me": "五张有颜色的都读出来了。"
        },
        {
          "npc": "那张没标签的呢？"
        },
        {
          "me": "坏道多，还在修。"
        },
        {
          "npc": "别熬夜。你们修电脑的，都不爱惜身体。"
        },
        {
          "npc": "真读不出来，也别勉强。坏了的东西，有时候就让它坏着吧。"
        }
      ]
    }
  ],
  "mails2018": [
    {
      "id": "m_c0_fan",
      "from": "一位观众 <viewer@example>",
      "date": "2026-12-18 23:41",
      "subject": "看完七中那期",
      "requires": "ch0",
      "html": "<p>老K：</p><p>看完七中那期，我在出租屋里坐了很久。我也是梧城人，2000年那年上初一。那时候大人都说“千年虫”是个怪物，后来才知道，是人。</p><p>你在片子最后说：修电脑第一步是先做镜像，别动原盘，因为原盘只有一张。我记住了。</p><p>谢谢你把那台机器修好。</p>"
    },
    {
      "id": "m_c1_news",
      "from": "梧城日报 · 早间推送 <news@example>",
      "date": "2026-12-21 07:30",
      "subject": "七中旧案重新侦查：二十六年前的“千年虫”或另有隐情",
      "requires": "ch1",
      "html": "<p>据警方通报，2000年梧城七中系列死亡案件已重新立案侦查。一名嫌疑人已被羁押。</p><p>当年被认定为“千年虫”的七中学生许嘉，其家属表示，愿意等待调查结论，不接受采访。</p><p>此前，一期修复七中旧电脑的网络视频引发广泛关注。</p>"
    },
    {
      "id": "m_c0_contract",
      "from": "鸣远数据 法务部 <legal@example>",
      "date": "2026-12-21 09:12",
      "subject": "委托合同（千禧胶囊读盘）",
      "requires": "ch1",
      "html": "<p>老K师傅：</p><p>附件为委托合同，要点如下：</p><p>一、读取对象：梧城少年宫1999年千禧时间胶囊内软盘；经相关当事人及赵小川家属同意，提前开盒检修，保留开盒清点录像，跨年夜正式展示。<br>二、读取方式：只读镜像，原盘不做写入。<br>三、公开范围：任何内容上屏前，须取得写信人本人书面同意；涉及已故者，须取得其家属同意。<br>四、本条第三款，委托方不得单方面变更。</p><p>第三、四款是您要求加的，陈总已签字确认。</p><p>鸣远数据 法务部</p>"
    },
    {
      "id": "m_c1_notice",
      "from": "城东拆迁指挥部 <notice@example>",
      "date": "2026-12-21 08:00",
      "subject": "梧城少年宫旧址拆除公告",
      "requires": "ch1",
      "html": "<p>梧城少年宫旧址（城东文化路3号）分区拆除：</p><p>12月下旬　礼堂、东侧附楼<br>12月31日　全面封场，禁止进入<br>2027年1月　主楼及楼顶天文台拆除</p><p>如有遗留物品，请于12月30日前联系原保管人江振华老师。</p>"
    },
    {
      "id": "m_c1_viewer",
      "from": "一位观众 <viewer5@example>",
      "date": "2026-12-21 09:40",
      "subject": "软盘还能读吗",
      "requires": "ch1",
      "html": "<p>老K：</p><p>我在旧书箱里翻到一盒3.5寸软盘，是我爸2001年存的照片。现在什么电脑都没有软驱了。</p><p>看你在拍少年宫的胶囊，想问问：二十多年的软盘，还能读吗？</p><p>我爸去年走了。我想看看那些照片里，他年轻的时候。</p>"
    }
  ],
  "items2018": [
    {
      "id": "c0_list",
      "name": "胶囊清单（1999年，夹在铁盒盖里）",
      "requires": "c0_box",
      "html": "<figure class=\"evidence-photo\"><svg class=\"evidence-image\" data-photo=\"document-paper\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"铁盒盖里的胶囊清单\"><title>铁盒盖里的胶囊清单</title><image href=\"TRIAL_PHOTO_document-paper_END\" width=\"1448\" height=\"1086\"/><g fill=\"#39362f\" font-family=\"SimSun, Songti SC, serif\"><text x=\"180\" y=\"145\" font-size=\"35\" >梧城少年宫 千禧时间胶囊</text><text x=\"180\" y=\"195.75\" font-size=\"35\" >封存：1999年12月31日 23:35</text><text x=\"180\" y=\"246.5\" font-size=\"35\" >开启：2027年1月1日 00:00（2026年跨年夜，等我们都四十岁）</text><text x=\"180\" y=\"297.25\" font-size=\"35\" ></text><text x=\"180\" y=\"348\" font-size=\"35\" >内装：</text><text x=\"180\" y=\"398.75\" font-size=\"35\" >1. 陈一鸣　软盘一张　蓝</text><text x=\"180\" y=\"449.5\" font-size=\"35\" >2. 赵小川　软盘一张　黑</text><text x=\"180\" y=\"500.25\" font-size=\"35\" >3. 白露　　软盘一张　白</text><text x=\"180\" y=\"551\" font-size=\"35\" >4. 孟凡　　软盘一张　绿</text><text x=\"180\" y=\"601.75\" font-size=\"35\" >5. 米乐　　软盘一张　粉</text><text x=\"180\" y=\"652.5\" font-size=\"35\" ></text><text x=\"180\" y=\"703.25\" font-size=\"35\" >共五张。</text><text x=\"180\" y=\"754\" font-size=\"35\" >铅封：梧城少年宫 1999.12.31</text><text x=\"180\" y=\"804.75\" font-size=\"35\" >保管人：江振华</text></g></svg></figure><div class=\"paper\">梧城少年宫 千禧时间胶囊<br>封存：1999年12月31日 23:35<br>开启：2027年1月1日 00:00（2026年跨年夜，等我们都四十岁）<br><br>内装：<br>1. 陈一鸣　软盘一张　蓝<br>2. 赵小川　软盘一张　黑<br>3. 白露　　软盘一张　白<br>4. 孟凡　　软盘一张　绿<br>5. 米乐　　软盘一张　粉<br><br>共五张。<br>铅封：梧城少年宫 1999.12.31<br>保管人：江振华</div>"
    },
    {
      "id": "c0_photo",
      "name": "开箱照片（你自己拍的）",
      "requires": "c0_box",
      "html": "<figure class=\"evidence-photo\"><svg class=\"evidence-image\" data-photo=\"unboxing\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"开箱照片：五张彩色盘与多出的一张灰盘\"><title>开箱照片：五张彩色盘与多出的一张灰盘</title><image href=\"TRIAL_PHOTO_unboxing_END\" width=\"1448\" height=\"1086\"/></svg></figure><div class=\"paper\">照片：工作台上的铁盒，盒盖内侧贴着清单。铅封已经剪开，放在一边。<br><br>盒子里的软盘排成一排：蓝、黑、白、绿、粉……还有一张灰色的，没有标签，压在最底下。<br><br>你在照片背面写：清单写五张。</div>"
    },
    {
      "id": "c1_seal_now",
      "name": "现在的铅封（你拍的特写）",
      "requires": "p2_seal_received",
      "html": "<figure class=\"evidence-photo\"><svg class=\"evidence-image\" data-photo=\"seal-base\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"现在的铅封：1999 年末尾的 9 有缺口\"><title>现在的铅封：1999 年末尾的 9 有缺口</title><image href=\"TRIAL_PHOTO_seal-base_END\" width=\"1448\" height=\"1086\"/><g transform=\"translate(724 550)\" fill=\"#464647\" opacity=\".84\"><defs><mask id=\"stamp-notch-seal-base\" maskUnits=\"userSpaceOnUse\" x=\"-400\" y=\"-300\" width=\"800\" height=\"600\"><rect x=\"-400\" y=\"-300\" width=\"800\" height=\"600\" fill=\"white\"/><path d=\"M-73 31l10 2-1 9-12-2z\" fill=\"black\"/></mask></defs><g mask=\"url(#stamp-notch-seal-base)\"><text x=\"0\" y=\"-48\" font-size=\"54\" text-anchor=\"middle\" font-family=\"SimSun, serif\">梧城少年宫</text><text x=\"-198\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text><text x=\"-154\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-110\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-66\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-22\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">.</text><text x=\"22\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text><text x=\"66\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">2</text><text x=\"110\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">.</text><text x=\"154\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">3</text><text x=\"198\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text></g></g></svg></figure><div class=\"paper\">特写：一枚剪开的铅封，压着字：<br><br>梧城少年宫 1999.12.31<br><br>字压得很深，边缘有些毛。年份末尾那个“9”的尾巴上有一个米粒大的缺口，像是模子上崩掉了一小块。</div>"
    },
    {
      "id": "c1_label",
      "name": "第六张盘的盘片（背面照片）",
      "requires": "p2_seal_received",
      "html": "<figure class=\"evidence-photo\"><svg class=\"evidence-image\" data-photo=\"disk-back\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"第六张盘背面：生产批号 0210\"><title>第六张盘背面：生产批号 0210</title><image href=\"TRIAL_PHOTO_disk-back_END\" width=\"1448\" height=\"1086\"/><g fill=\"#474842\" font-family=\"Consolas, monospace\" opacity=\".86\"><text x=\"435\" y=\"826\" font-size=\"30\" >DS,HD  1.44MB</text><text x=\"435\" y=\"873\" font-size=\"34\" >0210</text></g></svg></figure><div class=\"paper\">照片：灰色的3.5寸软盘，正面没有标签。<br><br>背面压印：DS,HD　1.44MB<br>生产批号：0210（2002年10月）<br><br>金属挡板上有一道明显的划痕，无法仅凭外观判断产生时间。</div>"
    },
    {
      "id": "c1_news2003",
      "name": "旧闻：《梧城晚报》2003年4月28日",
      "requires": "solved_c1_serial",
      "html": "<p class=\"muted\">老K检索保存：按制盘记录的年份2003、月日4月26日，查找少年宫同期公开旧报；原文如下。</p><div class=\"paper\">梧城晚报　2003年4月28日　第六版<br><br><b>停课期间翻入少年宫　一高中生死亡</b><br><br>4月27日清晨，少年宫工作人员在楼顶天文台内发现一名男生，已无生命体征。死者赵某某，17岁，本市某中学学生，患有哮喘。<br><br>警方初步调查认为，死者于26日夜间独自翻入因非典停课而关闭的少年宫，在天文台内哮喘发作，系意外。<br><br>少年宫提醒家长：停课期间请看管好孩子。</div>"
    }
  ],
  "readings": [],
  "puzzles": {
    "c0_count": {
      "kind": "text",
      "ask": true,
      "title": "一共几张",
      "requires": "ch0 & seen_c0_list & seen_c0_photo",
      "prompt": "清单写着共五张。胶囊里实际有几张盘？",
      "answers": [
        "6",
        "六",
        "6张",
        "六张"
      ],
      "hints": [
        "看“物品”里的开箱照片。",
        "五种颜色，再加一张没有标签的。",
        "答案：6。"
      ],
      "solvedText": "六张。五张有名字有颜色，还有一张灰色的，没有标签，压在最底下。",
      "onSolve": {
        "note": "n_p_count"
      }
    },
    "c0_odd": {
      "kind": "text",
      "ask": true,
      "title": "没有名字的那张",
      "requires": "solved_c0_count & seen_f_d6_dir",
      "prompt": "那张没有标签的盘，目录里一共列出了几个文件？",
      "answers": [
        "4",
        "四",
        "4个",
        "四个"
      ],
      "hints": [
        "在“胶囊软盘”里打开“盘6（无标签）”的目录。",
        "每一行一个文件，后面都写着坏道。",
        "答案：4。"
      ],
      "solvedText": "四个文件，全落在坏道上，一个也打不开：LETTER.TXT、CONFESS.TXT、CHAT.LOG、FOUND.TXT。",
      "onSolve": {
        "note": "n_p_odd"
      }
    },
    "c1_frame": {
      "kind": "frame",
      "ask": true,
      "title": "1999年的铅封",
      "requires": "ch1 & seen_v1999_01",
      "clip": "v1999_01",
      "frame": [
        "23:35:12"
      ],
      "answers": [
        "23:35:12"
      ],
      "prompt": "在1999年的仪式录像里，选出拍清铅封的那一帧。",
      "near": {
        "23:33:40": "这一帧在放盘，盒子还没合上。",
        "23:31:05": "这一帧还没开始放盘。",
        "23:34:20": "这一帧盒子还开着，镜头对着小川。"
      },
      "hints": [
        "铅封是盒子合上以后才打的。",
        "找“特写”。",
        "答案：23:35:12 那一帧。"
      ],
      "solvedText": "23:35:12，铅封特写：“梧城少年宫 1999.12.31”。年份末尾那个“9”的尾巴是完整、圆润的。",
      "onSolve": {
        "note": "n_p_frame1"
      }
    },
    "c1_diff": {
      "kind": "choice",
      "ask": true,
      "title": "哪里不一样",
      "requires": "solved_c1_frame & seen_c1_seal_now",
      "prompt": "现在的铅封，和1999年录像里的铅封，哪里不一样？",
      "options": [
        "年份末尾那个“9”的尾巴上多了一个缺口",
        "日期是1999.12.30",
        "少了“少年宫”三个字",
        "一模一样"
      ],
      "answer": "年份末尾那个“9”的尾巴上多了一个缺口",
      "answers": [
        "年份末尾那个“9”的尾巴上多了一个缺口"
      ],
      "hints": [
        "字和日期都一样。",
        "看年份末尾那个“9”的尾巴。",
        "答案：年份末尾那个“9”的尾巴上多了一个缺口。"
      ],
      "solvedText": "同样的字、同样的日期，可年份末尾那个“9”的尾巴缺了一小块。压印不同，疑似换过模子重封；还要结合盘片的生产年份核对，不能单凭照片确定何时、由谁动过。",
      "onSolve": {
        "note": "n_p_diff"
      }
    },
    "c1_serial": {
      "kind": "text",
      "ask": true,
      "title": "卷序列号",
      "requires": "ch1 & seen_f_serial_help & seen_f_d6_dir",
      "prompt": "第六张盘的卷序列号是 041A-152C。按 QNP-FMT 的记录，它的制盘时间是几月几日几点几分？按“月-日 时:分”输入，例如 12-31 23:05。",
      "answers": [
        "04-26 21:44",
        "4-26 21:44",
        "4月26日21:44",
        "4月26日 21:44",
        "0426 2144",
        "04-26 2144"
      ],
      "hints": [
        "041A 换成十进制是 1050。",
        "1050 = 4 × 256 + 26；152C = 5420 = 21 × 256 + 44。",
        "答案：04-26 21:44。"
      ],
      "solvedText": "4月26日21:44。第六张盘是在某一年的4月26日晚上九点四十四分格式化的。",
      "onSolve": {
        "note": [
          "n_p_serial",
          "n_p2_news_source"
        ]
      }
    },
    "c1_year": {
      "kind": "text",
      "ask": true,
      "title": "哪一年",
      "requires": "solved_c1_serial & seen_f_d6_dir & seen_c1_label & seen_c1_news2003",
      "prompt": "镜像目录的 QNP-FMT 扩展记录写着哪一年制作？再用盘片批号和旧闻核对。输入年份。",
      "answers": [
        "2003",
        "2003年"
      ],
      "hints": [
        "2002年4月26日的时候，这张盘还没生产出来。",
        "目录明确写着“制作年份：2003”；旧闻只作交叉核对。",
        "答案：2003。"
      ],
      "solvedText": "2003年4月26日21:44。那一夜，少年宫楼顶的天文台里死了一个学生。",
      "onSolve": {
        "note": "n_p_year"
      }
    },
    "c1_who": {
      "kind": "text",
      "ask": true,
      "title": "那一夜",
      "requires": "solved_c1_year",
      "prompt": "旧闻里的“赵某某”，是胶囊清单上的哪一个人？",
      "answers": [
        "赵小川",
        "小川"
      ],
      "hints": [
        "清单上只有一个人姓赵。",
        "江老师说过，五个孩子里有一个2003年走了。",
        "答案：赵小川。"
      ],
      "solvedText": "赵小川，清单上的第二个名字，黑色那张盘。第六张盘，是在他死的那一夜格式化的。",
      "onSolve": {
        "note": "n_p_who"
      }
    }
  },
  "boards": {
    "c1_final": {
      "title": "封条",
      "requires": "ch1 & solved_c1_frame & solved_c1_diff & solved_c1_serial & solved_c1_year & solved_c1_who",
      "intro": "把能直接证明每一句的原件挂上〔依据〕。",
      "text": "1999年录像里的铅封，年份末尾那个“9”的尾巴是{a}的（依据：{s1}）；现在的铅封，那里{b}，存在重封迹象。第六张盘的卷序列号{c}，算出是4月26日{d}格式化的；盘片{e}年10月才生产（依据：{s2}），不可能在1999年封存时就在盒内；结合铅封变化，说明后来重新开封、封回。目录另记制作年份2003（依据：{s3}），与{f}出事同夜。制盘和放入胶囊不是同一件事。",
      "slots": {
        "a": "w_a",
        "b": "w_b",
        "c": "w_c",
        "d": "w_d",
        "e": "w_e",
        "f": "w_f",
        "s1": "src:v1999_01",
        "s2": "src:c1_label",
        "s3": "src:f_d6_dir"
      },
      "words": {
        "w_a": "完整",
        "w_b": "有一个缺口",
        "w_c": "041A-152C",
        "w_d": "21:44",
        "w_e": "2002",
        "w_f": "赵小川",
        "d0": "一模一样",
        "d1": "0C1F-1705",
        "d2": "23:05",
        "d3": "2003",
        "d4": "陈一鸣",
        "d5": "江老师"
      },
      "srcPool": [
        "v1999_01",
        "c1_seal_now",
        "c1_label",
        "c1_news2003",
        "f_d6_dir",
        "f_serial_help"
      ],
      "hints": [
        "先填铅封，再填日期。",
        "〔依据〕：1999年的铅封看录像带；生产年份看盘片照片，制作年份看镜像目录。",
        "依次为：完整 →《录像 1999年》→ 有一个缺口 → 041A-152C → 21:44 → 2002 →《盘片照片》→《镜像目录》→ 赵小川。"
      ],
      "solvedText": "2002年生产的盘出现在1999年封存的盒内，加上压印变化，支持后来重封的判断。盘内制盘记录是2003年4月26日21:44，与小川出事同夜；何时放入、谁重封，还需证据。",
      "onSolve": {
        "note": "n_board1",
        "ending": "TRIAL"
      }
    }
  },
  "contacts2018": {
    "chen": {
      "name": "陈一鸣",
      "sub": "鸣远数据 · 委托人",
      "avatar": "陈"
    },
    "jiang": {
      "name": "江老师",
      "sub": "江振华 · 胶囊保管人",
      "avatar": "江",
      "requires": "dlg_c0_chen"
    },
    "kelan": {
      "name": "柯岚",
      "sub": "姐姐",
      "avatar": "岚",
      "requires": "ch1"
    }
  },
  "apps": {
    "mycomputer": {
      "name": "我的电脑",
      "icon": "computer",
      "requires": "ch0"
    },
    "caps": {
      "name": "胶囊软盘",
      "icon": "floppy",
      "path": "C:/胶囊软盘",
      "requires": "ch0"
    },
    "gexun": {
      "name": "鸽讯 2005",
      "icon": "pigeon",
      "requires": "ch0"
    },
    "internet": {
      "name": "Internet Explorer",
      "icon": "ie",
      "requires": "ch0"
    }
  },
  "boot": {
    "requires": "c0_box",
    "lockedText": "江老师还没把胶囊送来。先看看手机。"
  },
  "journal": {
    "ch0": {
      "question": "胶囊里有什么？",
      "steps": [
        {
          "until": "dlg_c0_chen",
          "text": "委托人陈一鸣发来了消息。",
          "source": {
            "type": "chat",
            "id": "chen"
          }
        },
        {
          "until": "c0_box",
          "text": "胶囊的保管人江老师发来了消息。",
          "source": {
            "type": "chat",
            "id": "jiang"
          }
        },
        {
          "until": "seen_c0_list",
          "text": "看1999年的胶囊清单。",
          "source": {
            "type": "item",
            "id": "c0_list"
          }
        },
        {
          "until": "solved_c0_count",
          "text": "打开读盘机，看看“胶囊软盘”里到底有几张盘。",
          "source": {
            "type": "app",
            "id": "caps"
          }
        },
        {
          "until": "solved_c0_odd",
          "text": "清单上没有的那一张，读出来的目录里有什么？",
          "source": {
            "type": "file",
            "id": "f_d6_dir"
          }
        }
      ]
    },
    "ch1": {
      "question": "第六张盘是什么时候放进胶囊的？",
      "steps": [
        {
          "until": "solved_c1_frame",
          "text": "手机里多了「录像」。在1999年的仪式录像里，找到铅封的特写。",
          "source": {
            "type": "clip",
            "id": "v1999_01"
          }
        },
        {
          "until": "solved_c1_diff",
          "text": "把录像里的铅封和你拍的现在的铅封对一对。",
          "source": {
            "type": "item",
            "id": "c1_seal_now"
          }
        },
        {
          "until": "solved_c1_serial",
          "text": "第六张盘的卷序列号还读得出来。“工作”文件夹里有你以前记的换算方法。",
          "source": {
            "type": "file",
            "id": "f_serial_help"
          }
        },
        {
          "until": "solved_c1_year",
          "text": "只知道月日，还差哪一年。先看镜像目录中的制作年份，再用盘片批号和旧闻交叉核对。",
          "source": {
            "type": "item",
            "id": "c1_label"
          }
        },
        {
          "until": "solved_c1_who",
          "text": "那一天出了什么事？",
          "source": {
            "type": "item",
            "id": "c1_news2003"
          }
        },
        {
          "until": "board_c1_final",
          "text": "打开手机“推理”，把本章的结论和依据拼起来。",
          "source": {
            "type": "board",
            "id": "c1_final"
          }
        }
      ]
    }
  },
  "footage": {
    "requires": "ch1",
    "sub": "仪式录像带的翻录 · 你自己拍的素材",
    "clips": [
      {
        "id": "k1220_01",
        "title": "12月20日：开箱",
        "date": "2026-12-20",
        "dur": "06:40",
        "requires": "ch0",
        "onOpen": {
          "note": "n_k1220"
        },
        "frames": [
          {
            "t": "22:05:10",
            "desc": "工作台上一个生锈的铁盒。铅封已经剪开，放在一个小碟子里。",
            "say": "江老师送来的。1999年千禧夜封的，说好今年跨年夜打开。",
            "photo": "<svg class=\"evidence-image\" data-photo=\"seal-base\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"现在的铅封：1999 年末尾的 9 有缺口\"><title>现在的铅封：1999 年末尾的 9 有缺口</title><image href=\"TRIAL_PHOTO_seal-base_END\" width=\"1448\" height=\"1086\"/><g transform=\"translate(724 550)\" fill=\"#464647\" opacity=\".84\"><defs><mask id=\"stamp-notch-seal-base\" maskUnits=\"userSpaceOnUse\" x=\"-400\" y=\"-300\" width=\"800\" height=\"600\"><rect x=\"-400\" y=\"-300\" width=\"800\" height=\"600\" fill=\"white\"/><path d=\"M-73 31l10 2-1 9-12-2z\" fill=\"black\"/></mask></defs><g mask=\"url(#stamp-notch-seal-base)\"><text x=\"0\" y=\"-48\" font-size=\"54\" text-anchor=\"middle\" font-family=\"SimSun, serif\">梧城少年宫</text><text x=\"-198\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text><text x=\"-154\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-110\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-66\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-22\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">.</text><text x=\"22\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text><text x=\"66\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">2</text><text x=\"110\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">.</text><text x=\"154\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">3</text><text x=\"198\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text></g></g></svg>"
          },
          {
            "t": "22:07:33",
            "desc": "你把软盘一张张摆出来：蓝、黑、白、绿、粉。最底下还有一张灰色的，没有标签。",
            "say": "清单上写五张。……这是第六张。",
            "photo": "<svg class=\"evidence-image\" data-photo=\"unboxing\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"开箱照片：五张彩色盘与多出的一张灰盘\"><title>开箱照片：五张彩色盘与多出的一张灰盘</title><image href=\"TRIAL_PHOTO_unboxing_END\" width=\"1448\" height=\"1086\"/></svg>"
          }
        ]
      },
      {
        "id": "v1999_01",
        "title": "1999年千禧夜：胶囊封存仪式（录像带翻录）",
        "date": "1999-12-31",
        "dur": "31:20",
        "requires": "p2_seal_received",
        "onOpen": {
          "note": "n_v1999"
        },
        "sub": "米乐的爸爸用家用摄像机录的，画面右下角有录像机的时间。",
        "frames": [
          {
            "t": "23:31:05",
            "desc": "少年宫礼堂，挂着“迎接2000年”的横幅。江老师（四十多岁，戴眼镜）举着一个铁盒。五个孩子排成一排，个子参差不齐。",
            "say": "（江老师）孩子们，把你们写给四十岁的自己放进去。"
          },
          {
            "t": "23:33:40",
            "desc": "孩子们一个接一个往盒子里放软盘：蓝、黑、白、绿、粉。黑色那张是一个瘦高的男孩放的，他放完还拍了拍盒子。",
            "say": "（米乐）我的是粉色的！（孟凡）谁问你了。"
          },
          {
            "t": "23:34:20",
            "desc": "瘦高的男孩背过身咳个不停。江老师从他书包侧袋里摸出一支哮喘喷雾，塞到他手里。男孩的书包上用涂改液画满了星星。",
            "say": "（江老师）小川，喷两下。药就放侧袋，别乱塞，听见没有？"
          },
          {
            "t": "23:35:12",
            "desc": "铅封特写：江老师用钳子压下铅块，字是“梧城少年宫 1999.12.31”。年份末尾那个“9”的尾巴完整、圆润。",
            "say": "（瘦高的男孩）这个模子是我做的！金工课做的！",
            "photo": "<svg class=\"evidence-image\" data-photo=\"seal-1999\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"1999 年录像中的铅封：末尾的 9 完整\"><title>1999 年录像中的铅封：末尾的 9 完整</title><image href=\"TRIAL_PHOTO_seal-1999_END\" width=\"1448\" height=\"1086\"/><g transform=\"translate(724 550)\" fill=\"#464647\" opacity=\".84\"><g ><text x=\"0\" y=\"-48\" font-size=\"54\" text-anchor=\"middle\" font-family=\"SimSun, serif\">梧城少年宫</text><text x=\"-198\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text><text x=\"-154\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-110\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-66\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-22\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">.</text><text x=\"22\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text><text x=\"66\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">2</text><text x=\"110\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">.</text><text x=\"154\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">3</text><text x=\"198\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text></g></g></svg>"
          },
          {
            "t": "23:36:50",
            "desc": "镜头扫过礼堂，孩子们在抢一包瓜子。只有四个孩子在画面里。",
            "say": "（江老师）一鸣呢？（孩子）他上楼顶拍倒计时去了！"
          },
          {
            "t": "23:59:52",
            "desc": "少年宫楼顶，所有人挤在栏杆边倒数。远处七中的方向，有人放了一支早的烟花。",
            "say": "十、九、八……（米乐凑到镜头前，小声说：四十岁的米乐，还记得今天。）",
            "onView": {
              "collect": "p_mile"
            }
          }
        ]
      }
    ]
  },
  "notes": {
    "n_f_d2": {
      "text": "小川1999年的信：模子做了两个；“许嘉哥说，修好了要签自己的名字。”"
    },
    "n_k1220": {
      "text": "12月20日开箱：六张盘，最底下一张灰色无标签。"
    },
    "n_p_count": {
      "text": "胶囊清单写五张；实际六张，多出一张灰色、无标签的盘。"
    },
    "n_p_odd": {
      "text": "第六张盘目录：LETTER.TXT、CONFESS.TXT、CHAT.LOG、FOUND.TXT，全在坏道上。"
    },
    "n_v1999": {
      "text": "1999年千禧夜仪式录像：五个孩子放入五张盘；23:35 封铅；封存后23:36，陈一鸣已经离开礼堂。"
    },
    "n_p_frame1": {
      "text": "1999年录像 23:35:12：铅封“梧城少年宫 1999.12.31”，年份末尾那个“9”的尾巴完整。"
    },
    "n_p_diff": {
      "text": "现在的铅封年份末尾那个“9”的尾巴有缺口，压印与1999年录像不同；可能重封过，尚不能仅凭照片确认模子和时间。"
    },
    "n_p_serial": {
      "text": "卷序列号 041A-152C → 4月26日 21:44 格式化。"
    },
    "n_p2_news_source": {
      "text": "按制盘记录中的4月26日和可读制作年份2003，检索少年宫同期公开旧报，保存了4月28日的报道。报道日期是线索，仍要核对盘片与人物说法。"
    },
    "n_p_year": {
      "text": "QNP-FMT 扩展记录写制作年份2003；结合卷序列号，盘内制盘时间为2003年4月26日21:44。批号只用于排除1999年。"
    },
    "n_p_who": {
      "text": "2003年4月26日夜，赵小川（17岁，有哮喘）死在少年宫楼顶天文台内，按“哮喘发作、意外”结案。"
    },
    "n_board1": {
      "text": "第六张盘格式化于2003年4月26日21:44，就是赵小川死的那一夜；胶囊被重新封过。"
    }
  },
  "collectibles": {
    "p_chen": {
      "title": "陈一鸣",
      "where": "蓝色那张盘 · 隐藏文件",
      "text": "四十岁的陈一鸣：别光顾着赢。"
    },
    "p_xiaochuan": {
      "title": "赵小川",
      "where": "黑色那张盘 · 隐藏文件",
      "text": "四十岁的赵小川：别怕说真话。"
    },
    "p_bailu": {
      "title": "白露",
      "where": "白色那张盘 · 文件属性",
      "text": "四十岁的白露：别替别人做决定。"
    },
    "p_mengfan": {
      "title": "孟凡",
      "where": "绿色那张盘 · 隐藏文件",
      "text": "四十岁的孟凡：少喝酒。"
    },
    "p_star6": {
      "title": "星图卡 · 昴星团",
      "where": "黑色那张盘 · 图纸属性",
      "text": "昴星团，七姐妹。七颗，我只数得出六颗。"
    },
    "p_star3": {
      "title": "星图卡 · 北极星",
      "where": "黑色那张盘 · 隐藏文件",
      "text": "北极星。它不动，别的星都绕着它转。迷路了就找它。"
    },
    "p_mile": {
      "title": "米乐",
      "where": "仪式录像带 · 零点",
      "text": "四十岁的米乐：还记得今天。"
    }
  },
  "helpCards": {
    "ch0": "两位数年份：早年内存和磁盘很贵，程序只存年份的后两位。1999，记作 99。",
    "ch1": "卷序列号：格式化软盘时写下的一串编号。有的制盘程序，会把格式化的时刻藏在里面。"
  },
  "storyRevision": 2026103001,
  "titleArt": "TRIAL_PHOTO_youth-group_END",
  "bbsMeta": {
    "name": "梧城热线",
    "sub": "旧网页尚未交付",
    "host": "wcrx.local",
    "homeNotice": "试玩版尚未收到公开网页备份。"
  },
  "endings": {
    "TRIAL": {
      "title": "敬请期待完整版本！",
      "html": "<p>试玩到这里结束。谢谢你陪老K打开这个铁盒。</p><p>清单写着五张，盒子里却有六张。第六张盘留下的时间，恰好是小川没能回家的那一夜。</p><p>它是谁放进去的？坏道里，还留下了什么？</p><p class=\"trial-end-note\">《千年虫 2：未寄出的明天》试玩版<br>序章「六张盘」 · 第一章「封条」</p>"
    }
  }
}));
