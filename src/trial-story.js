/* 试玩版独立剧情数据：仅包含序章与第一章可接触到的资料。 */
Y2K.patch(D => Object.assign(D, {
  "chapters": [
    {
      "id": "ch0",
      "num": "序章",
      "name": "开盒",
      "date": "2026-12-20",
      "time": "21:30",
      "trigger": "start",
      "intro": "2026年12月20日，晚上。梧城下了今冬第一场雪。<br><br>七中那期视频上线两周，找你修电脑的人多了一倍。<br><br>手机响了。一位没见过面的陈先生问你，工作室里还有没有能读软盘的机器。"
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
      "requires": "c0_image_ready"
    },
    {
      "id": "d_d1",
      "path": "C:/胶囊软盘/盘1（蓝·陈一鸣）",
      "type": "folder",
      "date": "1999-12-31 21:32",
      "requires": "c0_image_ready"
    },
    {
      "id": "d_d2",
      "path": "C:/胶囊软盘/盘2（黑·赵小川）",
      "type": "folder",
      "date": "1999-12-31 22:12",
      "requires": "c0_image_ready"
    },
    {
      "id": "d_d3",
      "path": "C:/胶囊软盘/盘3（白·白露）",
      "type": "folder",
      "date": "1999-12-31 22:15",
      "requires": "c0_image_ready"
    },
    {
      "id": "d_d4",
      "path": "C:/胶囊软盘/盘4（绿·孟凡）",
      "type": "folder",
      "date": "1999-12-31 22:18",
      "requires": "c0_image_ready"
    },
    {
      "id": "d_d5",
      "path": "C:/胶囊软盘/盘5（粉·米乐）",
      "type": "folder",
      "date": "1999-12-31 22:20",
      "requires": "c0_image_ready"
    },
    {
      "id": "d_d6",
      "path": "C:/胶囊软盘/盘6（无标签）",
      "type": "folder",
      "date": "2026-12-20 22:30",
      "requires": "c0_image_ready"
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
      "requires": "c0_image_ready",
      "props": {
        "来源": "工作室读盘机生成的目录报告，保存在工作盘的只读副本中"
      },
      "text": "灰色软盘 · 目录读取报告\n生成于 2026-12-20 22:30　老K工作室读盘机\n\n卷标：（无）\n卷序列号：041A-152C\n制作工具：QNP-FMT 1.0（少年宫制盘程序）\n制作年份：2003（扩展记录可读，校验通过）\n\n文件名        大小    日期        状态\nLETTER.TXT    5,228   ??-??-??    坏道，无法读取\nCONFESS.TXT   2,708   ??-??-??    坏道，无法读取\nCHAT.LOG      2,644   ??-??-??    坏道，无法读取\nFOUND.TXT     2,980   ??-??-??    坏道，无法读取\n\n目录区受损，四个文件的原始日期都没读出。后来补读的结果另存。\n外观：金属挡板有一道划痕，留下的时间和原因不明。"
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
      "id": "f_d1_letter",
      "evidenceOwner": "陈一鸣",
      "path": "C:/胶囊软盘/盘1（蓝·陈一鸣）/给2026年的我.txt",
      "type": "txt",
      "date": "1999-12-31 21:32",
      "requires": "c0_image_ready",
      "text": "2026年的陈一鸣：\n\n我是除虫小队队长陈一鸣。今天是1999年12月31日，我们刚帮卫生站查完电脑。\n\n我想你已经开了自己的公司，有很多电脑，再也不用抢少年宫那台奔腾了。\n\n今晚我要上楼顶拍倒计时，那是全梧城最好的位置。等四十岁的时候，我请他们四个吃饭。孟凡得坐我边上。靠窗的位子他也想要，那就猜拳，三局两胜。\n\n队长 陈一鸣"
    },
    {
      "id": "f_d1_sheet",
      "path": "C:/胶囊软盘/盘1（蓝·陈一鸣）/千年虫自查表（空白）.txt",
      "type": "txt",
      "date": "1999-12-12 16:30",
      "requires": "c0_image_ready",
      "text": "千年虫自查表　梧城少年宫 · 除虫小队\n\n检查人：________　地点：________　时间：________\n\n□ 1. BIOS 日期能不能跳到2000年\n□ 2. 系统日期是不是四位年份\n□ 3. 打补丁（光盘：千年虫补丁 v2.1）\n□ 4. 重启以后再看一次\n\n修好了，签自己的名字。没修好，也签自己的名字，写上为什么。\n\n——许嘉　1999.12.12"
    },
    {
      "id": "f_d1_hidden",
      "path": "C:/胶囊软盘/盘1（蓝·陈一鸣）/队长守则.txt",
      "type": "txt",
      "date": "1999-12-31 21:33",
      "requires": "c0_image_ready",
      "hidden": true,
      "onOpen": {
        "collect": "p_chen"
      },
      "text": "（隐藏文件）\n\n四十岁的陈一鸣：别光顾着赢。"
    },
    {
      "id": "f_d2_letter",
      "evidenceOwner": "赵小川",
      "path": "C:/胶囊软盘/盘2（黑·赵小川）/给2026年的我.txt",
      "type": "txt",
      "date": "1999-12-31 22:12",
      "requires": "c0_image_ready",
      "onOpen": {
        "note": "n_f_d2"
      },
      "text": "四十岁的我：\n\n你还在做模型吗？我在做一个天文台的模型。圆顶一转就卡，满满非要往里头塞个小人，说得有个人来开门。你要是造了个真的，记得给她也留把钥匙。\n\n今天封盒要用的铜模子，是我在金工课上做的。我做了两个，一个给江老师，一个我自己留着。等四十岁那天，胶囊打开以后，我要自己再封一次，封给六十岁的我们。\n\n许嘉哥说，修好了要签自己的名字。我今天修好了两台，签了两次。\n\n赵小川"
    },
    {
      "id": "f_d2_hidden",
      "path": "C:/胶囊软盘/盘2（黑·赵小川）/背面.txt",
      "type": "txt",
      "date": "1999-12-31 22:13",
      "requires": "c0_image_ready",
      "hidden": true,
      "onOpen": {
        "collect": "p_xiaochuan"
      },
      "text": "（隐藏文件）\n\n四十岁的赵小川：别怕说真话。"
    },
    {
      "id": "f_d3_letter",
      "evidenceOwner": "白露",
      "path": "C:/胶囊软盘/盘3（白·白露）/给2026年的我.txt",
      "type": "txt",
      "date": "1999-12-31 22:15",
      "requires": "c0_image_ready",
      "onProps": {
        "collect": "p_bailu"
      },
      "props": {
        "作者": "白露",
        "备注": "四十岁的白露：别替别人做决定。"
      },
      "text": "2026年的白露：\n\n你当上医生了吗？上个礼拜天刘阿姨借我听诊器，我听了自己的心跳。咚、哒，停一下，又咚、哒。我想问这算一下还是两下，她让人叫走了。下回记得问。\n\n今天在卫生站，护士阿姨说，电脑每天晚上都会给张奶奶打电话，提醒她吃药。一鸣在前台电脑上找到了张奶奶的名字，指给我看。我们九点才到。我想看看八点那通电话打通了没有。一鸣只找得到名字，点来点去也没找到拨号记录。\n\n希望四十岁的时候，我们五个还在一起。\n\n白露"
    },
    {
      "id": "f_d4_letter",
      "evidenceOwner": "孟凡",
      "path": "C:/胶囊软盘/盘4（绿·孟凡）/给2026年的我.txt",
      "type": "txt",
      "date": "1999-12-31 22:18",
      "requires": "c0_image_ready",
      "text": "四十岁的孟凡：\n\n你开上大卡车了吗？我爸说开卡车能去很远的地方。\n\n今天在卫生站，前台那台电脑是我跟一鸣查的。我外婆一个人住在卫生站后头，每天晚上八点，卫生站都会打电话提醒她吃心脏的药。护士阿姨说，外婆的电话号码就是从这台电脑输进去的。\n\n一鸣签字签得最快，他说人多了就占不着好地方，把手电扔给我，说楼顶见。外婆说哪天要坐我的车去东湖，问我开车稳不稳。我说你先等等，我脚还够不着呢。\n\n孟凡"
    },
    {
      "id": "f_d4_hidden",
      "path": "C:/胶囊软盘/盘4（绿·孟凡）/我爸.txt",
      "type": "txt",
      "date": "1999-12-31 22:19",
      "requires": "c0_image_ready",
      "hidden": true,
      "onOpen": {
        "collect": "p_mengfan"
      },
      "text": "（隐藏文件）\n\n四十岁的孟凡：少喝酒。我爸就是喝酒才天天吵架的。"
    },
    {
      "id": "f_d5_letter",
      "evidenceOwner": "米乐",
      "path": "C:/胶囊软盘/盘5（粉·米乐）/给2026年的我.txt",
      "type": "txt",
      "date": "1999-12-31 22:20",
      "requires": "c0_image_ready",
      "text": "亲爱的四十岁的米乐：\n\n我的盘是粉色的！\n\n你当上老师了吗？上课记得往后排看一眼。小川举手举到一半，老师一转身他就放下去了，我明明看见了。还有，上课有人嗑瓜子，你可以把瓜子收走，可等下课了得还人家。\n\n我们五个说好了，四十岁的时候一起打开这个盒子。一个都不能少。\n\n米乐"
    },
    {
      "id": "f_d1_plan",
      "path": "C:/胶囊软盘/盘1（蓝·陈一鸣）/倒计时拍摄计划.txt",
      "type": "txt",
      "date": "1999-12-28 21:30",
      "requires": "c0_image_ready",
      "text": "千禧倒计时 拍摄计划（导演：陈一鸣）\n\n机位：少年宫楼顶，东南角栏杆（能同时拍到七中和电视塔）\n器材：爸爸的 DV，电池两块，带子一盘（60分钟）\n\n12.31\n21:00　卫生站查电脑（江老师派的，快点弄完）\n21:40　上楼顶占机位！！！晚了就被高中生占了\n23:30　下楼放盘、封胶囊（不能缺席，我是队长）\n23:40　回楼顶\n23:59:50　开拍，倒数十秒\n00:00　烟花\n\n备注：孟凡负责举电筒。"
    },
    {
      "id": "f_d1_company",
      "path": "C:/胶囊软盘/盘1（蓝·陈一鸣）/我的公司.txt",
      "type": "txt",
      "date": "1999-12-30 20:15",
      "requires": "c0_image_ready",
      "text": "以后我要开一家公司。\n\n名字：鸣远（一鸣惊人，远走高飞）\n标志：一个“鸣”字，口字旁画成一台摄像机的镜头\n口号：先赢再说\n\n第一个员工：孟凡（他说他要开卡车，那就给公司开车）\n第二个员工：小川（做道具）\n白露当公司医生。米乐负责发瓜子。\n\n——陈一鸣 1999.12.30"
    },
    {
      "id": "f_d2_mold",
      "path": "C:/胶囊软盘/盘2（黑·赵小川）/模子图纸.txt",
      "type": "txt",
      "date": "1999-12-18 17:00",
      "requires": "c0_image_ready",
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
      "requires": "c0_image_ready",
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
      "requires": "c0_image_ready",
      "text": "2000年要看的：\n\n1. 1月21日 月全食（要早起，大概中午……不对，是北京时间中午，看不到。算了）\n2. 夏天的银河，去东湖那边，没有路灯\n3. 狮子座流星雨（东湖钓叟爷爷说2001年最多）\n4. 我的生日 4月26日，晚上看猎户座最后一眼\n\n修好了，签自己的名字：赵小川"
    },
    {
      "id": "f_d3_questions",
      "path": "C:/胶囊软盘/盘3（白·白露）/我的问题本.txt",
      "type": "txt",
      "date": "1999-12-26 21:00",
      "requires": "c0_image_ready",
      "text": "问题本（问许嘉哥和江老师的）\n\n1. 为什么不一开始就存四位？——省两个字节。七十年代很贵。\n2. 如果零点以后机器坏了，谁负责？——江老师说：签字的人负责。\n3. 卫生站那台电脑，是它自己打电话吗？——许嘉哥说，不是，前台只是窗口。我还没听懂。\n4. 医生和修电脑的人，哪个更厉害？——许嘉哥说，都一样，都要先查清楚，再签字。\n\n还没问的：\n5. 张奶奶的电话，会不会响？"
    },
    {
      "id": "f_d4_grandma",
      "path": "C:/胶囊软盘/盘4（绿·孟凡）/外婆的电话.txt",
      "type": "txt",
      "date": "1999-12-26 20:30",
      "requires": "c0_image_ready",
      "text": "外婆耳朵背，有时候响几声才听见。等她慢慢挪到电话跟前，都响十声了。\n护士阿姨说，不怕，头一回没接着，电脑还会再打，一晚上能打三遍。\n\n外婆说，电话一响，她就知道八点了，该吃药了，也知道有人还记得她。\n\n千禧年以后，我想给外婆买一个大声的电话。等我开上卡车，第一个拉她去东湖。"
    },
    {
      "id": "f_d5_list",
      "path": "C:/胶囊软盘/盘5（粉·米乐）/一个都不能少.txt",
      "type": "txt",
      "date": "1999-12-31 22:21",
      "requires": "c0_image_ready",
      "text": "除虫小队 生日表（米乐整理）\n\n陈一鸣　9月14日　爱吃：辣条\n孟凡　　7月18日　爱吃：外婆包的饺子\n白露　　11月8日　爱吃：话梅\n赵小川　4月26日　爱吃：什么都行，给他就吃\n米乐　　5月20日　爱吃：瓜子（我自己）\n\n规矩：谁过生日，其他四个人都要到。一个都不能少。"
    },
    {
      "id": "f_d5_tape",
      "path": "C:/胶囊软盘/盘5（粉·米乐）/录像带目录.txt",
      "type": "txt",
      "date": "1999-12-31 22:22",
      "requires": "c0_image_ready",
      "text": "我爸的录像带（家里柜子第二层）\n\n1. 1997 春节\n2. 1998 我上计算机班\n3. 1999.12.31 少年宫胶囊（我爸拍！我负责举话筒）\n\n我爸说，录像机右下角的时间要对准，不然以后谁也不信。我们对了三遍。"
    },
    {
      "id": "f_d3_diary",
      "path": "C:/胶囊软盘/盘3（白·白露）/日记 1231.txt",
      "type": "txt",
      "date": "1999-12-31 22:16",
      "requires": "c0_image_ready",
      "text": "1999年12月31日　晴　冷\n\n今天去卫生站。前台那台电脑是一鸣和孟凡查的。刘阿姨在旁边教我们怎么把要提醒的人输进电脑。\n\n一鸣九点二十就签了字。他说他要去楼顶占机位。我一直看着，屏幕上的日期跟刚开机时一样。他连机器都没重启。\n\n我想叫他等一下，没开口。\n\n许嘉哥说，没修好，也要签自己的名字，写上为什么。可今天那台电脑本来就没分给我查。我要是看见一鸣签错了，是不是也该说一声？\n\n明天，我去跟一鸣说，让他回去再查一遍。\n\n现在要去封胶囊了。写给四十岁的我：你当上医生了吗？"
    },
    {
      "id": "f_d4_draw",
      "path": "C:/胶囊软盘/盘4（绿·孟凡）/孟凡号.jpg",
      "type": "img",
      "date": "1999-12-31 22:19",
      "requires": "c0_image_ready",
      "html": "<svg class=\"evidence-image\" data-photo=\"mengfan-drawing\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"孟凡的画《孟凡号》：大卡车的车斗里坐着外婆，她抱着写有“八点”的大电话；天空有五颗星星，最大的一颗旁边写着“小川说这颗叫天狼星”。\"><title>孟凡的画《孟凡号》：大卡车的车斗里坐着外婆，她抱着写有“八点”的大电话；天空有五颗星星，最大的一颗旁边写着“小川说这颗叫天狼星”。</title><image href=\"TRIAL_PHOTO_mengfan-drawing_END\" width=\"1448\" height=\"1086\"/></svg>",
      "caption": "等我四十岁，我要把这张画给外婆看。",
      "props": {
        "作者": "孟凡",
        "备注": "等我四十岁，我要把这张画给外婆看。"
      }
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
      "text": "修理单背面　柯岚留\n\n我今天在柜台收了三台机器，地址已经分别写在袋子上。拆袋子的时候，电源跟各家的机器放一块儿。别又堆成一堆，回头全靠猜。靠窗那台属于卖早点的李叔，他说机器不急，里面给孙女存的作文急。给他回个电话吧，他临走前又问了一遍。\n\n晚上饭放在小锅，热一遍就吃。你上回说忙完吃，忙到我回来，锅还是凉的。炉子别开着就戴耳机，我从门口叫你三遍你都没听见。有人找你取机器，先把手里的螺丝放好再起来，你刚才找的那一颗就在裤脚卷边里。\n\n陈先生送来的纸箱我没拆。收件单夹在右边抽屉。门口那个柜子锁不上了，先别放贵重东西，我约了师傅明天来看。师傅明天来之前你可别把锁拆了，人家来了都不知道修哪儿。\n\n楼下小孩问你周日有没有空，想拿坏了的游戏机来。你答应帮看一次，别到时候全忘了。他没钱买新的，在门口问了好几回都不敢进去。我说你脸上那副表情不是不欢迎，是看小字看累了，他说知道，下回先敲门。\n\n还有一件事。你拍视频讲机器的时候，可以把话慢一点说。别人听不懂不是没认真听，是你每天摸着这些东西，觉得不用说的步骤太多。今天李叔问了三次“镜像是把照片变大吗”，你回他的时候已经伸手去拿下一件东西了。\n\n药盒在桌上，照医生说的用。今晚要是能早点关店就回来，我等你吃饭。"
    },
    {
      "id": "handoff_01-封存录像",
      "path": "C:/工作/来件/交接记录/01-封存录像.txt",
      "type": "txt",
      "date": "2026-12-21 10:00",
      "requires": "p2_seal_received",
      "text": "资料交接 · 01-封存录像\n经手人：米乐（录像）、江振华（转交）、老K（开箱原片）\n\n盒里比清单多一张软盘。我请江老师问问米乐，他爸拍的封盒录像还在不在。今天江老师把翻录件转给了我。\n\n随附：1999年封盒录像、这次开箱时拍的特写、QNP-FMT 格式说明。"
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
          "npc": "1999年跨年那晚，我们五个在梧城少年宫封了个时间胶囊，说好等大伙儿四十岁再开。日子写在盒盖上，2027年1月1号零点。"
        },
        {
          "npc": "老少年宫月底就封了，明年一月拆。我把新址的礼堂借下来了，费用公司出。跨年那晚还要直播。"
        },
        {
          "npc": "盒里是我们小时候写的信，一人一张软盘。我还指望大伙儿上台念两句呢。昨晚翻遍了家，连个软驱都找不着。我挨家问过了，都同意我先试盘。师傅，开盒的时候帮我录一下？到时候放给大家看。"
        },
        {
          "me": "行。我先把软盘上的资料拷贝一份。如果有地方要修，我就在拷贝上修，省得来回折腾原盘"
        },
        {
          "me": "等盘能读了，每个人的信先给他们自己看看。陈先生，你十三岁写的东西，真敢让公司的人先看？"
        },
        {
          "npc": "哎，那可不行。我连自己写了谁都忘了。先看，看完我再问谁愿意念。读盘的钱公司出，明天我把合同发你。"
        },
        {
          "npc": "那我就把试盘的事写进活动预告了。盒子一直在江老师那儿，他以前教我们电脑，今年七十多了，说今晚给你送过去。"
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
          "npc": "七中那期我看了。许嘉以前也来少年宫上我的课。头一回来，得坐到椅子边上才够得着键盘。后来打起字来，比我都快。唉，这孩子。"
        },
        {
          "npc": "二十七年，盒子一直搁储藏室那只铁柜里。柜门钥匙在我这儿，没给过别人。这回少年宫旧址要拆了，我才去把盒子拿出来。"
        },
        {
          "npc": "到你门口了。封线我剪了，铅块没扔，盖子也还扣着。你开的时候录一下，让几个孩子看看当年的东西。",
          "at": "2026-12-20 22:00"
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
          "npc": "五个孩子里有一个……2003年走了。他那张盘，师傅，拿的时候手轻一点。"
        },
        {
          "npc": "读出什么，也跟我说一声。我老了，就想跨年那晚看他们高高兴兴的。"
        }
      ]
    },
    {
      "id": "c0_end",
      "contact": "jiang",
      "trigger": "solved_c0_odd & dlg_c0_photo_chen",
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
          "me": "您看照片里那张没标签的灰盘。我开盒时，它压在最底下。一鸣说他没印象，您记得是谁放的吗？",
          "html": "<svg class=\"evidence-image\" data-photo=\"unboxing\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"开盒时拍的照片：清单贴在盒盖内侧，盒口摆着五张彩色软盘和一张灰色软盘\"><title>开盒时拍的照片：清单贴在盒盖内侧，盒口摆着五张彩色软盘和一张灰色软盘</title><image href=\"TRIAL_PHOTO_unboxing_END\" width=\"1448\" height=\"1086\"/><g transform=\"matrix(.98 -.057 .035 .98 502 118)\" font-family=\"SimSun, serif\" fill=\"#41392c\" opacity=\".76\" aria-hidden=\"true\"><text x=\"0\" y=\"0\" font-size=\"19\" >梧城少年宫 千禧时间胶囊</text><text x=\"0\" y=\"18\" font-size=\"15\" >封存：1999年12月31日 23:35</text><text x=\"0\" y=\"36\" font-size=\"15\" >开启：2027年1月1日 00:00（2026年跨年夜，等我们都四十岁）</text><text x=\"0\" y=\"54\" font-size=\"15\" ></text><text x=\"0\" y=\"72\" font-size=\"15\" >内装：</text><text x=\"0\" y=\"90\" font-size=\"15\" >1. 陈一鸣　软盘一张　蓝</text><text x=\"0\" y=\"108\" font-size=\"15\" >2. 赵小川　软盘一张　黑</text><text x=\"0\" y=\"126\" font-size=\"15\" >3. 白露　　软盘一张　白</text><text x=\"0\" y=\"144\" font-size=\"15\" >4. 孟凡　　软盘一张　绿</text><text x=\"0\" y=\"162\" font-size=\"15\" >5. 米乐　　软盘一张　粉</text><text x=\"0\" y=\"180\" font-size=\"15\" ></text><text x=\"0\" y=\"198\" font-size=\"15\" >共五张。</text><text x=\"0\" y=\"216\" font-size=\"15\" >铅封：梧城少年宫 1999.12.31</text><text x=\"0\" y=\"234\" font-size=\"15\" >保管人：江振华</text></g></svg>"
        },
        {
          "npc": "灰盘我不记得。米乐那张我倒记得，他往里放的时候还喊呢，说他的是粉的。最后到底放了几张，我还真没数。"
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
      "id": "c1_jiang",
      "contact": "jiang",
      "trigger": "ch1 & solved_c1_frame",
      "steps": [
        {
          "npc": "米乐他爸拍的那盘带子，还看得清人吗？"
        },
        {
          "me": "看得清。有个孩子背着个画了星星的书包，往盒里放了张黑盘。那是小川吧？"
        },
        {
          "npc": "是他。拿涂改液画的，他妈洗了两回也没洗掉。"
        },
        {
          "me": "他那天怎么还背着书包上台？"
        },
        {
          "npc": "喷雾放在书包里呢。那天小川咳了一阵，还是我从他包里拿给他的。"
        },
        {
          "npc": "你从封盒那儿往前倒一点，米乐他爸应该拍着了。"
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
          "me": "嗯，少年宫托我读几张旧软盘。清单上写着五张，盒子开出来倒有六张。"
        },
        {
          "npc": "瞧你，一说“六张”就来劲了。上回修七中那台电脑你也这样。"
        },
        {
          "npc": "今晚可别又熬通宵。上回我去工作室，一开门就看见你躺在地上。"
        },
        {
          "me": "知道。药在抽屉里。"
        },
        {
          "npc": "要在你嘴里。"
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
          "npc": "那天我还得顾着楼顶那台相机。礼堂里估计没拍着我几回。"
        },
        {
          "npc": "我又翻出昨晚开盒的照片看了看。盒底那张灰盘，现在能看出是谁的了吗？"
        },
        {
          "me": "只读出了几个文件名，里面写的什么还看不见。"
        },
        {
          "npc": "……读出什么，先告诉我。我是委托人。"
        },
        {
          "me": "陈总，你写的那封信，我可以先发给你。灰盘没署名，我还得查查是谁留下的。"
        },
        {
          "npc": "行，我还真想看看自己那封。"
        }
      ]
    },
    {
      "id": "p2_seal_delivery",
      "contact": "jiang",
      "trigger": "ch1",
      "steps": [
        {
          "npc": "米乐把录像发过来了。封盒那段从头到尾都在，你先看，别往外放。原带他爸还留着呢。"
        },
        {
          "me": "收到了，我拿昨天开盒那段跟它对一对。灰盘上还能读出个序列号，是 QNP-FMT 写的。我这儿有说明书，等会儿翻翻。"
        },
        {
          "action": {
            "set": [
              "p2_seal_received"
            ],
            "toast": "已收到封盒录像，可和开箱照片对照"
          }
        }
      ]
    },
    {
      "id": "c0_photo_chen",
      "contact": "chen",
      "trigger": "dlg_c0_jiang & solved_c0_odd",
      "steps": [
        {
          "me": "陈总，这张是我把盘摊开以后拍的。灰色那张原来压在五张彩盘底下，没贴标签。你认识吗？",
          "html": "<svg class=\"evidence-image\" data-photo=\"unboxing\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"开盒时拍的照片：清单贴在盒盖内侧，盒口摆着五张彩色软盘和一张灰色软盘\"><title>开盒时拍的照片：清单贴在盒盖内侧，盒口摆着五张彩色软盘和一张灰色软盘</title><image href=\"TRIAL_PHOTO_unboxing_END\" width=\"1448\" height=\"1086\"/><g transform=\"matrix(.98 -.057 .035 .98 502 118)\" font-family=\"SimSun, serif\" fill=\"#41392c\" opacity=\".76\" aria-hidden=\"true\"><text x=\"0\" y=\"0\" font-size=\"19\" >梧城少年宫 千禧时间胶囊</text><text x=\"0\" y=\"18\" font-size=\"15\" >封存：1999年12月31日 23:35</text><text x=\"0\" y=\"36\" font-size=\"15\" >开启：2027年1月1日 00:00（2026年跨年夜，等我们都四十岁）</text><text x=\"0\" y=\"54\" font-size=\"15\" ></text><text x=\"0\" y=\"72\" font-size=\"15\" >内装：</text><text x=\"0\" y=\"90\" font-size=\"15\" >1. 陈一鸣　软盘一张　蓝</text><text x=\"0\" y=\"108\" font-size=\"15\" >2. 赵小川　软盘一张　黑</text><text x=\"0\" y=\"126\" font-size=\"15\" >3. 白露　　软盘一张　白</text><text x=\"0\" y=\"144\" font-size=\"15\" >4. 孟凡　　软盘一张　绿</text><text x=\"0\" y=\"162\" font-size=\"15\" >5. 米乐　　软盘一张　粉</text><text x=\"0\" y=\"180\" font-size=\"15\" ></text><text x=\"0\" y=\"198\" font-size=\"15\" >共五张。</text><text x=\"0\" y=\"216\" font-size=\"15\" >铅封：梧城少年宫 1999.12.31</text><text x=\"0\" y=\"234\" font-size=\"15\" >保管人：江振华</text></g></svg>"
        },
        {
          "npc": "我放大看了。蓝盘是我的，灰的没印象。"
        },
        {
          "me": "我把你的蓝盘单独收好了。当时除了你们五个，还有谁在盒子旁边？"
        },
        {
          "npc": "江老师在，他就站桌边。你问问他？我去找米乐，他小时候连谁拿什么颜色的盘都记得。"
        }
      ]
    }
  ],
  "mails2018": [
    {
      "id": "m_c1_news",
      "from": "梧城日报 · 早间推送 <news@example>",
      "date": "2026-12-21 07:30",
      "subject": "七中旧案重新侦查：二十六年前的“千年虫”或另有隐情",
      "requires": "ch1",
      "html": "<p>据警方通报，2000年梧城七中系列死亡案件已重新立案侦查。一名嫌疑人已被羁押。</p><p>当年被认定为“千年虫”的七中学生许嘉，其家属表示，愿意等待调查结论，不接受采访。</p><p>此前，一期修复七中旧电脑的网络视频引发广泛关注。</p>"
    },
    {
      "id": "m_c0_fan",
      "from": "一位观众 <viewer@example>",
      "date": "2026-12-18 23:41",
      "subject": "看完七中那期",
      "requires": "ch0",
      "html": "<p>老K：</p><p>看完七中那期，我在出租屋里坐了很久。我也是梧城人，2000年那年上初一。那时候大人一提“千年虫”，我就以为是个怪物。后来才知道，七中有人拿这三个字当网名。</p><p>你在片子最后说：修电脑第一步是先做镜像，别动原盘，因为原盘只有一张。我记住了。</p><p>谢谢你把那台机器修好。</p>"
    },
    {
      "id": "m_c0_contract",
      "from": "鸣远数据 法务部 <legal@example>",
      "date": "2026-12-21 09:12",
      "subject": "委托合同（千禧胶囊读盘）",
      "requires": "ch1",
      "html": "<p>老K师傅：</p><p>附件为委托合同，要点如下：</p><p>一、读取对象：梧城少年宫1999年千禧时间胶囊内软盘；开盒查验已取得写信人或其家属的同意，提前开盒检修，保留开盒清点录像，跨年夜正式展示。<br>二、读取方式：只读镜像，原盘不做写入。<br>三、公开范围：任何内容上屏前，须取得写信人本人书面同意；涉及已故者，须取得其家属同意。<br>四、本条第三款，委托方不得单方面变更。</p><p>第三、四款是您要求加的，陈总已签字确认。</p><p>鸣远数据 法务部</p>"
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
      "html": "<p>老K：</p><p>我在旧书箱里翻到一盒3.5寸软盘，是我爸2001年存的照片。家里翻遍了，没一台电脑能插软盘。</p><p>看你在拍少年宫的胶囊，想问问：二十多年的软盘，还能读吗？</p><p>我爸去年走了。我想看看照片里他年轻时候的样子。</p>"
    }
  ],
  "mails2026": [],
  "items2018": [
    {
      "id": "c0_list",
      "name": "胶囊清单（1999年，贴在铁盒盖内侧）",
      "requires": "c0_box",
      "html": "<figure class=\"evidence-photo\"><svg class=\"evidence-image\" data-photo=\"document-paper\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"铁盒盖里的胶囊清单\"><title>铁盒盖里的胶囊清单</title><image href=\"TRIAL_PHOTO_document-paper_END\" width=\"1448\" height=\"1086\"/><g fill=\"#39362f\" font-family=\"SimSun, Songti SC, serif\"><text x=\"180\" y=\"145\" font-size=\"35\" >梧城少年宫 千禧时间胶囊</text><text x=\"180\" y=\"195.75\" font-size=\"35\" >封存：1999年12月31日 23:35</text><text x=\"180\" y=\"246.5\" font-size=\"35\" >开启：2027年1月1日 00:00（2026年跨年夜，等我们都四十岁）</text><text x=\"180\" y=\"297.25\" font-size=\"35\" ></text><text x=\"180\" y=\"348\" font-size=\"35\" >内装：</text><text x=\"180\" y=\"398.75\" font-size=\"35\" >1. 陈一鸣　软盘一张　蓝</text><text x=\"180\" y=\"449.5\" font-size=\"35\" >2. 赵小川　软盘一张　黑</text><text x=\"180\" y=\"500.25\" font-size=\"35\" >3. 白露　　软盘一张　白</text><text x=\"180\" y=\"551\" font-size=\"35\" >4. 孟凡　　软盘一张　绿</text><text x=\"180\" y=\"601.75\" font-size=\"35\" >5. 米乐　　软盘一张　粉</text><text x=\"180\" y=\"652.5\" font-size=\"35\" ></text><text x=\"180\" y=\"703.25\" font-size=\"35\" >共五张。</text><text x=\"180\" y=\"754\" font-size=\"35\" >铅封：梧城少年宫 1999.12.31</text><text x=\"180\" y=\"804.75\" font-size=\"35\" >保管人：江振华</text></g></svg></figure><div class=\"paper\">梧城少年宫 千禧时间胶囊<br>封存：1999年12月31日 23:35<br>开启：2027年1月1日 00:00（2026年跨年夜，等我们都四十岁）<br><br>内装：<br>1. 陈一鸣　软盘一张　蓝<br>2. 赵小川　软盘一张　黑<br>3. 白露　　软盘一张　白<br>4. 孟凡　　软盘一张　绿<br>5. 米乐　　软盘一张　粉<br><br>共五张。<br>铅封：梧城少年宫 1999.12.31<br>保管人：江振华</div>"
    },
    {
      "id": "c0_photo",
      "name": "开箱照片（你自己拍的）",
      "requires": "c0_box",
      "onOpen": {
        "clock": "2026-12-20 22:10"
      },
      "html": "<figure class=\"evidence-photo\"><svg class=\"evidence-image\" data-photo=\"unboxing\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"开盒时拍的照片：清单贴在盒盖内侧，盒口摆着五张彩色软盘和一张灰色软盘\"><title>开盒时拍的照片：清单贴在盒盖内侧，盒口摆着五张彩色软盘和一张灰色软盘</title><image href=\"TRIAL_PHOTO_unboxing_END\" width=\"1448\" height=\"1086\"/><g transform=\"matrix(.98 -.057 .035 .98 502 118)\" font-family=\"SimSun, serif\" fill=\"#41392c\" opacity=\".76\" aria-hidden=\"true\"><text x=\"0\" y=\"0\" font-size=\"19\" >梧城少年宫 千禧时间胶囊</text><text x=\"0\" y=\"18\" font-size=\"15\" >封存：1999年12月31日 23:35</text><text x=\"0\" y=\"36\" font-size=\"15\" >开启：2027年1月1日 00:00（2026年跨年夜，等我们都四十岁）</text><text x=\"0\" y=\"54\" font-size=\"15\" ></text><text x=\"0\" y=\"72\" font-size=\"15\" >内装：</text><text x=\"0\" y=\"90\" font-size=\"15\" >1. 陈一鸣　软盘一张　蓝</text><text x=\"0\" y=\"108\" font-size=\"15\" >2. 赵小川　软盘一张　黑</text><text x=\"0\" y=\"126\" font-size=\"15\" >3. 白露　　软盘一张　白</text><text x=\"0\" y=\"144\" font-size=\"15\" >4. 孟凡　　软盘一张　绿</text><text x=\"0\" y=\"162\" font-size=\"15\" >5. 米乐　　软盘一张　粉</text><text x=\"0\" y=\"180\" font-size=\"15\" ></text><text x=\"0\" y=\"198\" font-size=\"15\" >共五张。</text><text x=\"0\" y=\"216\" font-size=\"15\" >铅封：梧城少年宫 1999.12.31</text><text x=\"0\" y=\"234\" font-size=\"15\" >保管人：江振华</text></g></svg></figure><div class=\"paper\">照片：工作台上的铁盒，盒盖内侧贴着清单。剪断的封线和铅块放在一边。<br><br>你把取出来的软盘沿着盒口摊开。蓝、黑、白、绿、粉，旁边还有一张灰色的，没贴标签。刚掀开盖子时，它压在最底下。<br><br>你给照片加了条备注：清单写五张。</div>"
    },
    {
      "id": "c1_seal_now",
      "name": "现在的铅封（你拍的特写）",
      "requires": "p2_seal_received",
      "html": "<figure class=\"evidence-photo\"><svg class=\"evidence-image\" data-photo=\"seal-base\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"现在的铅封：1999 年末尾的 9 有缺口\"><title>现在的铅封：1999 年末尾的 9 有缺口</title><image href=\"TRIAL_PHOTO_seal-base_END\" width=\"1448\" height=\"1086\"/><g transform=\"translate(724 550)\" fill=\"#464647\" opacity=\".84\"><defs><mask id=\"stamp-notch-seal-base\" maskUnits=\"userSpaceOnUse\" x=\"-400\" y=\"-300\" width=\"800\" height=\"600\"><rect x=\"-400\" y=\"-300\" width=\"800\" height=\"600\" fill=\"white\"/><path d=\"M-74 43l5 1 1 9-7-1z\" fill=\"black\"/></mask></defs><g mask=\"url(#stamp-notch-seal-base)\"><text x=\"0\" y=\"-48\" font-size=\"54\" text-anchor=\"middle\" font-family=\"SimSun, serif\">梧城少年宫</text><text x=\"-198\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text><text x=\"-154\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-110\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-66\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-22\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">.</text><text x=\"22\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text><text x=\"66\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">2</text><text x=\"110\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">.</text><text x=\"154\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">3</text><text x=\"198\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text></g></g></svg></figure><div class=\"paper\">剪下来的铅块还连着一截封线。上面压着一行字：<br><br>梧城少年宫 1999.12.31<br><br>字压得很深，边缘有些毛。年份末尾那个“9”的尾巴上有一个米粒大的缺口，像是模子上崩掉了一小块。</div>"
    },
    {
      "id": "c1_label",
      "name": "第六张盘的盘片（背面照片）",
      "requires": "p2_seal_received",
      "html": "<figure class=\"evidence-photo\"><svg class=\"evidence-image\" data-photo=\"disk-back\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"第六张软盘的背面：生产批号 0210\"><title>第六张软盘的背面：生产批号 0210</title><image href=\"TRIAL_PHOTO_disk-back_END\" width=\"1448\" height=\"1086\"/><g fill=\"#474842\" font-family=\"Consolas, monospace\" opacity=\".86\"><text x=\"435\" y=\"826\" font-size=\"30\" >DS,HD  1.44MB</text><text x=\"435\" y=\"873\" font-size=\"34\" >0210</text></g></svg></figure><div class=\"paper\">照片：灰色的3.5寸软盘，正面没有标签。<br><br>背面压印：DS,HD　1.44MB<br>生产批号：0210（2002年10月）<br><br>金属挡板上有一道明显的划痕，无法仅凭外观判断产生时间。</div>"
    },
    {
      "id": "c1_news2003",
      "name": "旧闻：《梧城晚报》2003年4月28日",
      "requires": "solved_c1_serial",
      "html": "<p class=\"muted\">沿着灰盘的日期往后查，我在2003年4月28日的《梧城晚报》上找到了这条短讯。——老K</p><div class=\"paper\">梧城晚报　2003年4月28日　第六版<br><br><b>停课期间翻入少年宫　一高中生死亡</b><br><br>4月27日清晨，少年宫工作人员在楼顶天文台内发现一名男生，已无生命体征。死者赵某某，17岁，本市某中学学生，患有哮喘。<br><br>警方初步调查认为，死者于26日夜间独自翻入因非典停课而关闭的少年宫，在天文台内哮喘发作，系意外。<br><br>少年宫提醒家长：停课期间请看管好孩子。</div>"
    }
  ],
  "items2026": [],
  "readings": [
    {
      "id": "r2_lid",
      "chapter": "ch0",
      "title": "等我们都四十岁",
      "date": "1999-12-31",
      "requires": "ch0 & seen_c0_list",
      "source": "贴在铁盒盖内侧的胶囊清单",
      "html": "<p>清单上一个名字占一行。陈一鸣，蓝盘。赵小川，黑盘。往下是白露、孟凡，最后那张粉的归米乐。</p><p>名单上方写着开盒的日子，连钟点也约好了：2027年1月1日零点。五个孩子还特地写上了“等我们都四十岁”。</p>"
    },
    {
      "id": "r2_birthdays",
      "chapter": "ch0",
      "title": "小川爱吃什么",
      "date": "1999-12-31",
      "requires": "ch0 & seen_f_d5_list",
      "source": "米乐的粉盘 ·《一个都不能少》",
      "html": "<p>米乐做了张生日表。一鸣爱吃辣条，白露爱吃话梅。孟凡那栏写得仔细，得是外婆包的饺子。轮到小川，米乐只写了八个字：“什么都行，给他就吃。”</p><p>他把自己也列进去了，五月二十，瓜子。表底下还有条规矩，谁过生日，另外四个人都得来给他过。</p>"
    },
    {
      "id": "r2_pink",
      "chapter": "ch1",
      "title": "我的是粉色的",
      "date": "1999-12-31",
      "requires": "ch1 & seen_v1999_01",
      "source": "米乐父亲翻录的千禧夜封存录像",
      "html": "<p>礼堂里，江老师举着铁盒，让孩子们把盘放进去。瘦高的男孩放下黑盘，还伸手拍了拍盒子。米乐在旁边等着，嗓门比谁都大：“我的是粉色的！”</p><p>“谁问你了。”孟凡说。</p><p>拍到楼顶倒数的时候，周围的人都在喊。米乐又凑到镜头跟前，这次说得很轻：“四十岁的米乐，还记得今天。”</p>"
    }
  ],
  "screensaver": [],
  "userExtras": [],
  "puzzles": {
    "c0_count": {
      "kind": "text",
      "ask": true,
      "title": "一共几张",
      "requires": "ch0 & seen_c0_list & seen_c0_photo",
      "prompt": "清单上写了五张。看看开箱照片，盒子里一共有几张软盘？",
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
      "solvedText": "六张。五张彩盘底下压着一张没贴签的灰盘。五张彩盘都拷出来了。读灰盘时软驱响了好几次，读盘报告上有一片红。先看看目录还在不在。",
      "onSolve": {
        "note": "n_p_count",
        "set": [
          "c0_image_ready"
        ],
        "clock": "2026-12-20 22:30"
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
      "solvedText": "23:35:12，镜头对准铅封。“梧城少年宫 1999.12.31”这行字拍得清楚，年份末尾那个“9”圆圆的，一点没缺。",
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
      "solvedText": "录像里那个“9”是好的，现在尾巴上却缺了一小块。有人换过模子，重新封过盒子？再翻过那张灰盘，看看背面是哪年出厂的。",
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
      "solvedText": "4月26日，晚上9点44分。知道这张盘是什么时候格式化的了，只差年份。",
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
      "prompt": "打开灰盘的镜像目录，看看 QNP-FMT 记下的制盘年份。再对照盘上的批号和当年的报纸，填入年份。",
      "answers": [
        "2003",
        "2003年"
      ],
      "hints": [
        "2002年4月26日的时候，这张盘还没生产出来。",
        "看灰盘目录里的“制作年份”。报纸能帮你对上那天出了什么事。",
        "答案：2003。"
      ],
      "solvedText": "2003年4月26日21:44。灰盘是那晚格式化的。晚报还记了另一件事：第二天一早，少年宫里发现了一个十七岁的男孩。",
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
      "solvedText": "清单上第二个名字是赵小川，黑盘是他的。多出来的那张灰盘，偏偏是在他出事那一夜格式化的。",
      "onSolve": {
        "note": "n_p_who"
      }
    }
  },
  "boards": {
    "c1_final": {
      "title": "封条",
      "requires": "(ch1 & solved_c1_frame & solved_c1_diff & solved_c1_serial & solved_c1_year & solved_c1_who) & seen_v1999_01 & seen_c1_label & seen_f_d6_dir & seen_c1_seal_now & seen_c1_news2003 & seen_f_serial_help",
      "intro": "读到〔依据〕时，选出能证明这句话的那份原件。",
      "text": "1999年跨年夜，梧城少年宫的五个孩子各自写了封信，存在软盘上，一起封进铁盒。那年他们十三岁，约好等四十岁了，再看看自己写了些什么。二十七年后，陈一鸣张罗着把大家再聚到一起。他怕上了台才发现盘读不出来，托我提前试试。<br><br>盒盖内侧贴着一张清单，每个名字后面都写着软盘的颜色。我照着清单把五张盘摆在桌上，盒底却还剩一张灰的。再看{s1}，孩子们放进去的明明只有五张。<br><br>江老师压下钳子时，录像里还能看清铅封上的“1999”。最后一个“9”的尾巴是{a}的，手里这枚铅封上，那个“9”却{b}。我又看了{s2}，批号是“0210”。这张盘到{e}年十月才出厂。有人在那以后重新开过盒，把灰盘放了进去。<br><br>灰盘的文件还打不开，读盘机留下了{s3}，上面记着年份和卷序列号：2003，{c}。我照少年宫制盘程序的说明一算，这张盘是在4月26日{d}格式化的。往后翻了两天的晚报，我看到一条短讯。27日清早，有人在少年宫天文台里发现了一个十七岁的男孩，已经去世了，报上只写他姓赵。江老师说过，写信的五个孩子里有一个在那年走了。我又看了一眼盒盖里的清单。五个人里，姓赵的叫{f}。",
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
        "先看当年封盒的录像，再对照手里这枚铅封和灰盘背面的批号。",
        "年份记在读盘机保存的目录里。用卷序列号换算月日和钟点，再把日期与晚报上的消息对一对。",
        "按空格顺序：《1999年录像〈胶囊封存仪式〉》 → 完整 → 有一个缺口 → 《灰盘背面照片》 → 2002 → 盘6的《目录.txt》 → 041A-152C → 21:44 → 赵小川。"
      ],
      "solvedText": "灰盘是在小川出事那晚格式化的。后来有人把它放进盒子，还把铅封重新压好了。谁有这样的模子？",
      "onSolve": {
        "note": "n_board1",
        "ending": "TRIAL"
      },
      "sourceLabels": {
        "v1999_01": "《1999年录像〈胶囊封存仪式〉》",
        "c1_label": "《灰盘背面照片》",
        "f_d6_dir": "盘6的《目录.txt》"
      },
      "requiredSources": [
        "v1999_01",
        "c1_label",
        "f_d6_dir",
        "c1_seal_now",
        "c1_news2003",
        "f_serial_help"
      ],
      "investigationRequires": "ch1 & solved_c1_frame & solved_c1_diff & solved_c1_serial & solved_c1_year & solved_c1_who"
    }
  },
  "notes": {
    "n_p_count": {
      "text": "清单上记了五张软盘，开箱时数到六张。多出来的那张是灰色的，没贴标签。"
    },
    "n_p_odd": {
      "text": "第六张盘目录：LETTER.TXT、CONFESS.TXT、CHAT.LOG、FOUND.TXT，全在坏道上。"
    },
    "n_p_frame1": {
      "text": "1999年录像，23:35:12。铅封上印着“梧城少年宫 1999.12.31”，年份末尾那个“9”的尾巴是完整的。"
    },
    "n_p_diff": {
      "text": "现在的铅封上，年份末尾那个“9”缺了一小截，1999年录像里的“9”却是好的。盒子也许重新封过。"
    },
    "n_p_serial": {
      "text": "卷序列号 041A-152C → 4月26日 21:44 格式化。"
    },
    "n_p_year": {
      "text": "QNP-FMT 记录了制盘年份，卷序列号补上了月日和钟点：2003年4月26日21:44。盘上的批号只能说明，1999年封盒时这张盘还没出厂。"
    },
    "n_p_who": {
      "text": "4月27日清早，一名十七岁的男孩被发现在天文台里。晚报只说他姓赵，警方初步判断是哮喘发作。清单上的赵小川与报上的人对得上。"
    },
    "n_board1": {
      "text": "2003年4月26日21:44，有人格式化了这张灰盘。小川就是那天夜里出的事。铁盒后来让人打开过，又重新封上了。"
    },
    "n_v1999": {
      "text": "米乐爸爸拍的封盒录像，镜头从礼堂一直跟到了楼顶。画面右下角有时间。"
    },
    "n_k1220": {
      "text": "12月20日开盒时数过，六张软盘。垫在最底下的那张是灰色的，没贴标签。"
    },
    "n_f_d2": {
      "text": "小川1999年的信：模子做了两个；“许嘉哥说，修好了要签自己的名字。”"
    },
    "n_p2_news_source": {
      "text": "顺着制盘日期找到了当年的一份《梧城晚报》，剪报已存进手机。"
    }
  },
  "endings": {
    "TRIAL": {
      "title": "敬请期待完整版本！",
      "html": "<p>试玩到这里结束。谢谢你陪老K打开这个铁盒。</p><p>清单上的五张彩盘都找到了。那盒底多出来的灰盘，是谁放进去的？</p><p class=\"trial-end-note\">《千年虫 2：未寄出的明天》试玩版<br>序章「开盒」 · 第一章「封条」</p>"
    }
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
          "text": "盒盖里的清单记了五张软盘。数数开箱照片里桌上摆了几张？",
          "source": {
            "type": "item",
            "id": "c0_photo"
          }
        },
        {
          "until": "solved_c0_odd",
          "text": "灰盘没写在清单上。打开它的目录，看看能读出哪些文件名。",
          "source": {
            "type": "file",
            "id": "f_d6_dir"
          }
        },
        {
          "until": "dlg_c0_photo_chen",
          "text": "开箱时拍的照片里有一张没贴签的盘，先发给委托人认一认。",
          "source": {
            "type": "chat",
            "id": "chen"
          }
        },
        {
          "until": "dlg_c0_end",
          "text": "一鸣看过照片了，再请当年封盒的江老师看看。",
          "source": {
            "type": "chat",
            "id": "jiang"
          }
        }
      ],
      "facts": [
        {
          "requires": "solved_c0_count",
          "text": "开箱数到六张盘，清单上只登记了五张。"
        },
        {
          "requires": "solved_c0_odd",
          "text": "灰盘能读出四个文件名，正文还打不开。"
        }
      ]
    },
    "ch1": {
      "question": "封盒那晚，灰盘已经在里面了吗？",
      "steps": [
        {
          "until": "p2_seal_received",
          "text": "江老师昨晚答应去问米乐要录像。看看他发来的消息。",
          "source": {
            "type": "chat",
            "id": "jiang"
          }
        },
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
          "text": "拿出开箱时拍的照片，跟录像里的铅封比一比。",
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
          "text": "四月二十六日，是哪一年？看看灰盘镜像目录记的年份，再对照盘片批号和当年的报纸。",
          "source": {
            "type": "item",
            "id": "c1_label"
          }
        },
        {
          "until": "solved_c1_who",
          "text": "查查当年的梧城晚报。灰盘格式化的那个夜里，少年宫出了什么事？",
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
      ],
      "facts": [
        {
          "requires": "solved_c1_diff",
          "text": "现在的铅封和录像里的印子不一样。"
        },
        {
          "requires": "solved_c1_year",
          "text": "灰盘的制盘记录是2003年4月26日21:44。"
        }
      ]
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
      "requires": "c0_image_ready"
    },
    "gexun": {
      "name": "鸽讯 2005",
      "icon": "pigeon",
      "requires": "ch0"
    }
  },
  "boot": {
    "requires": "c0_box",
    "lockedText": "江老师还没把胶囊送来。先看看手机。"
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
    "p_mile": {
      "title": "米乐",
      "where": "仪式录像带 · 零点",
      "text": "四十岁的米乐：还记得今天。"
    },
    "p_star3": {
      "title": "星图卡 · 北极星",
      "where": "黑色那张盘 · 隐藏文件",
      "text": "北极星。它不动，别的星都绕着它转。迷路了就找它。"
    },
    "p_star6": {
      "title": "星图卡 · 昴星团",
      "where": "黑色那张盘 · 图纸属性",
      "text": "昴星团，七姐妹。七颗，我只数得出六颗。"
    }
  },
  "footage": {
    "requires": "ch1",
    "sub": "1999年的仪式录像、工作室监控，还有你自己拍的几段",
    "clips": [
      {
        "id": "v1999_01",
        "title": "1999年千禧夜：胶囊封存仪式（录像带翻录）",
        "date": "1999-12-31",
        "dur": "31:20",
        "requires": "p2_seal_received",
        "onOpen": {
          "note": "n_v1999"
        },
        "sub": "米乐爸爸用家里的摄像机拍的，画面右下角能看到拍摄时间。",
        "frames": [
          {
            "t": "23:31:05",
            "desc": "少年宫礼堂，挂着“迎接2000年”的横幅。江老师（四十多岁，戴眼镜）举着一个铁盒。五个孩子排成一排，个子参差不齐。",
            "say": "（江老师）孩子们，把你们给四十岁的自己写的信放进盒子里吧。"
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
            "desc": "少年宫楼顶，所有人挤在栏杆边倒数。远处七中那边，已经有人抢先放了支烟花。",
            "say": "十、九、八……（米乐凑到镜头前，小声说：四十岁的米乐，还记得今天。）",
            "onView": {
              "collect": "p_mile"
            }
          }
        ]
      },
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
            "desc": "镜头先拍桌上碟子里的铅块，上面还连着一截剪断的封线。镜头拉远，旁边的铁盒还扣着盖。",
            "say": "已经录上了。江老师，我开了啊。",
            "photo": "<svg class=\"evidence-image\" data-photo=\"seal-base\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"现在的铅封：1999 年末尾的 9 有缺口\"><title>现在的铅封：1999 年末尾的 9 有缺口</title><image href=\"TRIAL_PHOTO_seal-base_END\" width=\"1448\" height=\"1086\"/><g transform=\"translate(724 550)\" fill=\"#464647\" opacity=\".84\"><defs><mask id=\"stamp-notch-seal-base\" maskUnits=\"userSpaceOnUse\" x=\"-400\" y=\"-300\" width=\"800\" height=\"600\"><rect x=\"-400\" y=\"-300\" width=\"800\" height=\"600\" fill=\"white\"/><path d=\"M-74 43l5 1 1 9-7-1z\" fill=\"black\"/></mask></defs><g mask=\"url(#stamp-notch-seal-base)\"><text x=\"0\" y=\"-48\" font-size=\"54\" text-anchor=\"middle\" font-family=\"SimSun, serif\">梧城少年宫</text><text x=\"-198\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text><text x=\"-154\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-110\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-66\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">9</text><text x=\"-22\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">.</text><text x=\"22\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text><text x=\"66\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">2</text><text x=\"110\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">.</text><text x=\"154\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">3</text><text x=\"198\" y=\"50\" font-size=\"58\" text-anchor=\"middle\" font-family=\"Consolas, monospace\">1</text></g></g></svg>"
          },
          {
            "t": "22:07:33",
            "desc": "你掀开盒盖，露出贴在内侧的清单。你把蓝、黑、白、绿、粉五张软盘依次取出来。盒底还压着一张没贴标签的灰盘，你把它摆在粉盘旁边。",
            "say": "清单上写五张。……这是第六张。",
            "photo": "<svg class=\"evidence-image\" data-photo=\"unboxing\" viewBox=\"0 0 1448 1086\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"开盒时拍的照片：清单贴在盒盖内侧，盒口摆着五张彩色软盘和一张灰色软盘\"><title>开盒时拍的照片：清单贴在盒盖内侧，盒口摆着五张彩色软盘和一张灰色软盘</title><image href=\"TRIAL_PHOTO_unboxing_END\" width=\"1448\" height=\"1086\"/><g transform=\"matrix(.98 -.057 .035 .98 502 118)\" font-family=\"SimSun, serif\" fill=\"#41392c\" opacity=\".76\" aria-hidden=\"true\"><text x=\"0\" y=\"0\" font-size=\"19\" >梧城少年宫 千禧时间胶囊</text><text x=\"0\" y=\"18\" font-size=\"15\" >封存：1999年12月31日 23:35</text><text x=\"0\" y=\"36\" font-size=\"15\" >开启：2027年1月1日 00:00（2026年跨年夜，等我们都四十岁）</text><text x=\"0\" y=\"54\" font-size=\"15\" ></text><text x=\"0\" y=\"72\" font-size=\"15\" >内装：</text><text x=\"0\" y=\"90\" font-size=\"15\" >1. 陈一鸣　软盘一张　蓝</text><text x=\"0\" y=\"108\" font-size=\"15\" >2. 赵小川　软盘一张　黑</text><text x=\"0\" y=\"126\" font-size=\"15\" >3. 白露　　软盘一张　白</text><text x=\"0\" y=\"144\" font-size=\"15\" >4. 孟凡　　软盘一张　绿</text><text x=\"0\" y=\"162\" font-size=\"15\" >5. 米乐　　软盘一张　粉</text><text x=\"0\" y=\"180\" font-size=\"15\" ></text><text x=\"0\" y=\"198\" font-size=\"15\" >共五张。</text><text x=\"0\" y=\"216\" font-size=\"15\" >铅封：梧城少年宫 1999.12.31</text><text x=\"0\" y=\"234\" font-size=\"15\" >保管人：江振华</text></g></svg>"
          }
        ]
      }
    ]
  },
  "map": null,
  "collectLabel": "星图卡与五句话",
  "helpCards": {
    "ch0": "两位数年份：早年内存和磁盘很贵，程序只存年份的后两位。1999，记作 99。",
    "ch1": "卷序列号：格式化软盘时写下的一串编号。有的制盘程序，会把格式化的时刻藏在里面。"
  },
  "storyRevision": 2026110803,
  "titleArt": "TRIAL_PHOTO_youth-group_END",
  "threads": [],
  "loginLog": [],
  "mails": [],
  "pages": [],
  "users": [],
  "bbsBoards": [],
  "adminSections": {},
  "gxAccount": {},
  "gxAccounts": {},
  "gxContacts": [],
  "gxLogs": [],
  "bbsMeta": {
    "name": "梧城热线",
    "sub": "旧网页尚未交付",
    "host": "wcrx.local",
    "homeNotice": "试玩版尚未收到公开网页备份。"
  }
}));

Y2K.patch(function installTrialMigration(D, keepFullRevision = false) {
  const oldLines = ['师傅，读得怎么样？', '五张有颜色的都读出来了。', '那张没标签的呢？', '坏道多，还在修。', '别熬夜。你们修电脑的，都不爱惜身体。', '真读不出来，也别勉强。坏了的东西，有时候就让它坏着吧。'];
  const scene = D.dialogues.find(d => d.id === 'c1_jiang');
  D.migrateStory = state => {
    const previous = Math.max(state.storyRevision || 0, (keepFullRevision ? state.paidTrialMigrationRevision : state.trialMigrationRevision) || 0);
    if (previous >= D.storyRevision) return;
    if (state.flags.ch1) state.flags.p2_seal_received = true;
    for (const message of state.chat?.jiang || []) {
      const i = message.ref ? (message.ref.d === scene.id ? message.ref.i : -1) : oldLines.indexOf(message.text);
      const wording = scene.steps[i]?.[message.from];
      if (wording) message.text = wording;
    }
    // Some exported early saves have message text without a dialogue position.
    const imageTime = '2026-12-20 22:30';
    if (state.flags.solved_c0_count || state.flags.ch1 || state.flags.seen_f_d6_dir || state.opened?.f_d6_dir) {
      state.flags.c0_image_ready = true;
      if (state.chapter === 'ch0' && state.clock < imageTime) {
        state.clock = imageTime; state.clockAt = Date.now();
        state.chTime = {date: imageTime.slice(0,10), time: imageTime.slice(11), at: state.clockAt};
      }
    }
    const delivery = D.dialogues.find(d => d.id === 'c0_jiang').steps[3];
    for (const message of state.chat?.jiang || []) {
      const ref = message.ref;
      const matches = ref ? ref.d === 'c0_jiang' && ref.i === 3 : message.text === delivery.npc || message.text?.startsWith('盒子我放你门口了。');
      if (message.from !== 'npc' || !matches || message.sceneAt > delivery.at) continue;
      message.sceneAt = delivery.at; message.at = '12月20日 22:00';
      if (state.clock && state.clock < delivery.at) {
        state.clock = delivery.at; state.clockAt = Date.now();
        state.chTime = {date: delivery.at.slice(0,10), time: delivery.at.slice(11), at: state.clockAt};
      }
      const thread = state.dlg?.c0_jiang;
      if (thread && !thread.done && thread.i > 3 && (!thread.at || thread.at < delivery.at)) thread.at = delivery.at;
    }
    const earlyReplies = [["c0_chen",3,"盒里一人一张软盘，存的都是小时候写的信。我家连个软驱都找不着了，总不能等几万人看直播的时候，才头一回试这些盘能不能读吧？大家都答应先开盒，小川家里也点了头。麻烦你从开盒起录下来。跨年那晚我们再把盘拿上台，念信。"],["c0_chen",5,"等盘能读了，各人的信先给各人。你十三岁写的那封，真想让全公司的人先听？"],["c0_jiang",1,"许嘉我教过，在少年宫。第一次来上课，椅子还得往前拖。后来打字比我都快。你拍的七中那期，我看了。"],["p2_seal_delivery",1,"收到了。我拿昨天开箱那段跟它对着看，铅封和盘片都拍清楚了。灰盘用的是 QNP-FMT，我手里还有这工具的说明，能查查卷序列号。"],["c1_chen",7,"陈总，开盒前咱们说好的，各人先看各人的。你那封我可以给你，别人的得先问一句。"],["c1_kelan",5,"药在抽屉里有什么用。要在你嘴里。"],["c0_chen",4,"行。我先把软盘上的写保护拨好，把能读的都拷出来。真有地方要修，我就在拷贝上修，省得来回折腾原盘。"],["c0_end",3,"有一张没标签。我先读读看。"],["c1_chen",3,"我那天在楼顶，录像里应该没几个我的镜头。"],["c1_chen",4,"那张多出来的盘呢？"],["c1_chen",5,"还在读。"],["c1_chen",7,"陈总，合同第三条你也看过。信上大屏得先问本人。私下给你看也一样，写信的人得说行。"],["c1_chen",8,"那条是你加的。行。"]];
    earlyReplies.push(
      ["c0_chen", 3, "盒里是我们小时候写的信，一人一张软盘。我还指望大伙儿上台念两句呢。昨晚翻遍了家，连个软驱都找不着。我挨家问过了，都说先开吧。师傅，开盒的时候帮我录一下？到时候放给大家看。"],
      ["c0_chen", 4, "行，我先把盘里的东西拷出来。真有坏的地方，我就修拷出来的那份，不折腾原盘。"],
      ["c0_chen", 5, "信读出来，先各自看一遍吧。陈总，你十三岁写的东西，真敢让公司的人先看？"],
      ["c0_chen", 7, "盒子一直在江老师那儿。他以前教我们电脑，今年七十多了，说今晚给你送过去。"],
      ["c0_jiang", 3, "到你门口了。封线我剪了，铅块没扔，盖子也还扣着。你开的时候录一下，让几个孩子看看当年的东西。"],
      ["c0_end", 3, "您看照片最底下，有张灰色的软盘。一鸣说他没印象，您记得是谁放进去的吗？"],
      ["c0_photo_chen", 0, "陈总，给你看张开盒的照片。五张彩盘下面压着一张灰的，也没贴标签。你认识这张灰盘吗？"]
    );
    earlyReplies.push(["c0_chen", 4, "行，我先给盘拨上写保护。能读的先拷，读不出来的地方记下来，回头再试。拼文件就在副本上拼。"], ["c0_chen", 5, "信读出来，各人的先给各人看。陈先生，你十三岁写的东西，真敢让公司的人先看？"]);
    earlyReplies.push(["c0_jiang", 3, "到门口了。盒子还封着呢。我带了钳子，等你把镜头对好了，我再剪线。铅块也给你留着。"], ["c0_chen", 3, "盒里是我们小时候写的信，一人一张软盘。我还指望大伙儿上台念两句呢。昨晚翻遍了家，连个软驱都找不着。我挨家问过了，都同意我先试盘。师傅，从剪封线起就帮我录着吧？到时候放给大家看。"]);
    for (const [id, index, oldText] of earlyReplies) {
      const dialogue = D.dialogues.find(d => d.id === id);
      for (const message of state.chat?.[dialogue.contact] || []) {
        const matches = message.ref ? message.ref.d === id && message.ref.i === index : message.text === oldText;
        const wording = dialogue.steps[index][message.from];
        if (matches && typeof wording === 'string') message.text = wording;
      }
    }
    // Older releases moved dialogue steps. The November wording edit keeps their positions.
    if (previous < 2026110202) {
      for (const log of Object.values(state.chat || {})) {
        for (const message of log) if (message.text != null) delete message.ref;
      }
      for (const dialogue of D.dialogues) {
        const current = state.dlg?.[dialogue.id];
        if (!current || current.done) continue;
        current.i = 0;
        delete current.rep;
        delete state.wait[dialogue.contact];
        const queue = state.dlgQ[dialogue.contact] ||= [];
        if (!queue.includes(dialogue.id)) queue.unshift(dialogue.id);
      }
    }
    // Old trial saves predate the explicit photo handoff to the commissioner.
    const photo = D.dialogues.find(dialogue => dialogue.id === 'c0_photo_chen');
    const photoDone = state.flags.ch1 || state.flags.dlg_c0_end || state.dlg?.c0_end?.i > 3;
    state.chat ||= {}; state.dlg ||= {}; state.dlgQ ||= {}; state.wait ||= {};
    if (photo && photoDone && !state.dlg[photo.id] && !state.flags['dlg_' + photo.id]) {
      const sceneAt = '2026-12-20 22:30';
      const log = state.chat[photo.contact] ||= [];
      const messages = photo.steps.filter(step => step.me !== undefined || step.npc !== undefined).map((step, i) => {
        const from = step.me !== undefined ? 'me' : 'npc';
        return { from, text: step[from], at: '12月20日 22:30', sceneAt, ref: {d: photo.id, i} };
      });
      const later = log.findIndex(message => message.sceneAt > sceneAt);
      log.splice(later < 0 ? log.length : later, 0, ...messages);
      state.dlg[photo.id] = {i: photo.steps.length, done: 1, at: sceneAt};
      state.flags['dlg_' + photo.id] = true;
    }
    const closing = state.dlg.c0_end;
    if (closing && !closing.done && !state.flags.dlg_c0_photo_chen) {
      const queue = state.dlgQ.jiang || [];
      if (queue[0] === 'c0_end') delete state.wait.jiang;
      state.dlgQ.jiang = queue.filter(id => id !== 'c0_end');
      (state.heldDialogues ||= {}).c0_end = closing;
      delete state.dlg.c0_end;
    }
    if (keepFullRevision) state.paidTrialMigrationRevision = D.storyRevision;
    else { state.trialMigrationRevision = D.storyRevision; state.storyRevision = D.storyRevision; }
  };
});
