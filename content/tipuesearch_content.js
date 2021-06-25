var tipuesearch = {"pages": [{'title': '首頁', 'text': '2021/6/25 第十八周 更新 \n 補W16第四項。 \n 我的倉儲 \n 分組: \n W2-W4 (3 Weeks): 二人一組，組長是我 \n 組別網頁 \n W5-W9 (5 Weeks): 四人一組，組長: 40623144 \n 組別網頁 \n W10-W18 (9 Weeks): 八人一組，組長: 40623144 \n 組別網頁 \n \n', 'tags': '', 'url': '首頁.html'}, {'title': 'W5', 'text': '\n \n \n 組別(乙班) \n 時間 \n \n \n 1 \n 07:14 \n \n \n 2 \n 01:55 \n \n \n 3 \n 01:55 \n \n \n 4 \n 02:51 \n \n \n 5 \n 03:00 \n \n \n 6 \n 03:07 \n \n \n 7 \n 02:47 \n \n \n 8 \n 03:25 \n \n \n 9 \n 02:43 \n \n \n 10 \n 02:20 \n \n \n 11 \n 01:38 \n \n \n 12 \n 01:47 \n \n \n 13 \n 02:09 \n \n \n 14 \n 05:58 \n \n \n 15 \n 03:24 \n \n \n 16 \n 03:33 \n \n \n 17 \n 04:33 \n \n \n 18 \n 05:03 \n \n \n 19 \n 03:11 \n \n \n 20 \n 03:32 \n \n \n 21 \n 05:02 \n \n \n 22 \n 04:46 \n \n \n 23 \n 02:55 \n \n \n 24 \n 05:00 \n \n \n 25 \n 04:53 \n \n \n 26 \n 00:00 \n \n \n 27 \n 03:43 \n \n \n \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W13', 'text': '機械手臂程式 \n 參考組長影片: 模擬影片 \n from   robolink  import   * \n from   robodk  import   * \n \xa0 \n import   os \n \xa0 \n dir_path  =   os.path.dirname(os.path.realpath(__file__)) \n print (dir_path) \n # Calculate pyramid coordinate \n \xa0 \n # Setup global parameters \n BALL_DIAMETER  =   100   # diameter of one ball \n APPROACH  =   100   # approach distance to grab each part, in mm \n nTCPs  =   6   # number of TCP\'s in the tool \n \xa0 \n def   pyramid_calc(BALLS_SIDE = 4 ): \n """Calculate a list of points (ball center) as if the balls were place in a pyramid""" \n #the number of balls can be calculated as: int(BALLS_SIDE*(BALLS_SIDE+1)*(2*BALLS_SIDE+1)/6) \n #BALL_DIAMETER = 100 \n xyz_list  =   [] \n sqrt2  =   2 * * ( 0.5 ) \n for   h  in   range (BALLS_SIDE): \n for   i  in   range (BALLS_SIDE - h): \n for   j  in   range (BALLS_SIDE - h): \n height  =   h * BALL_DIAMETER / sqrt2  +   BALL_DIAMETER / 2 \n xyz_list  =   xyz_list  +   [[i * BALL_DIAMETER  +   (h + 1 ) * BALL_DIAMETER * 0.5 , j * BALL_DIAMETER  +   (h + 1 ) * BALL_DIAMETER * 0.5 , height]] \n return   xyz_list \n \xa0 \n def   TCP_On(toolitem, tcp_id): \n """Attach the closest object to the toolitem Htool pose, \n furthermore, it will output appropriate function calls on the generated robot program (call to TCP_On)""" \n toolitem.AttachClosest() \n toolitem.RDK().RunMessage( \'Set air valve %i on\'   %   (tcp_id + 1 )) \n toolitem.RDK().RunProgram( \'TCP_On(%i)\'   %   (tcp_id + 1 )); \n \xa0 \n def   TCP_Off(toolitem, tcp_id, itemleave = 0 ): \n """Detaches the closest object attached to the toolitem Htool pose, \n furthermore, it will output appropriate function calls on the generated robot program (call to TCP_Off)""" \n toolitem.DetachAll(itemleave) \n toolitem.RDK().RunMessage( \'Set air valve %i off\'   %   (tcp_id + 1 )) \n toolitem.RDK().RunProgram( \'TCP_Off(%i)\'   %   (tcp_id + 1 )); \n \xa0 \n # Make a list of positions to place the objects \n balls_list  =   pyramid_calc( 4 ) \n \xa0 \n #print(len(frame1_list)) \n # 4*4 = 16 \n # 3*3 = 9 \n # 2*2 = 4 \n # 1+4+9+16 = 30 \n \xa0 \n # height 50*sqrt(2) \n \'\'\' \n [ \n \xa0 \n [50.0, 50.0, 50.0], [50.0, 150.0, 50.0], [50.0, 250.0, 50.0], [50.0, 350.0, 50.0], \n \xa0 \n [150.0, 50.0, 50.0], [150.0, 150.0, 50.0], [150.0, 250.0, 50.0], [150.0, 350.0, 50.0], \n \xa0 \n [250.0, 50.0, 50.0], [250.0, 150.0, 50.0], [250.0, 250.0, 50.0], [250.0, 350.0, 50.0], \n \xa0 \n [350.0, 50.0, 50.0], [350.0, 150.0, 50.0], [350.0, 250.0, 50.0], [350.0, 350.0, 50.0], \n \xa0 \n \xa0 \n [100.0, 100.0, 120.71067811865474], [100.0, 200.0, 120.71067811865474], [100.0, 300.0, 120.71067811865474], \n \xa0 \n [200.0, 100.0, 120.71067811865474], [200.0, 200.0, 120.71067811865474], [200.0, 300.0, 120.71067811865474], \n \xa0 \n [300.0, 100.0, 120.71067811865474], [300.0, 200.0, 120.71067811865474], [300.0, 300.0, 120.71067811865474], \n \xa0 \n \xa0 \n [150.0, 150.0, 191.42135623730948], [150.0, 250.0, 191.42135623730948], \n \xa0 \n [250.0, 150.0, 191.42135623730948], [250.0, 250.0, 191.42135623730948], \n \xa0 \n \xa0 \n [200.0, 200.0, 262.13203435596427] \n \xa0 \n ] \n \xa0 \n \'\'\' \n # https://github.com/RoboDK/RoboDK-API/blob/master/Python/robolink.py \n # robodk_path variable to specify location of RoboDK.exe \n # under Ubuntu can not use "-NEWINSTANCE" \n \'\'\' \n start_robodk.sh content \n LD_LIBRARY_PATH="/home/yen/RoboDK/bin/lib" \n export LD_LIBRARY_PATH \n /home/yen/RoboDK/bin/RoboDK \n \'\'\' \n RDK  =   Robolink(robodk_path = r "Y:\\robodk522_portable\\bin\\RoboDK.exe" ,args = [ "-SKIPINI" ,  "-EXIT_LAST_COM" ]) \n # Add robot and the accompanied Base coordinate \n print (dir_path  +   \'/Fanuc-M-710iC-50.robot\' ) \n # relative directory or absolute directory will work for AddFile under Ubuntu \n #robot = RDK.AddFile(r"/home/yen/github/wcm2021/downloads/robodk/pick_and_place_kmol_mac/Fanuc-M-710iC-50.robot") \n robot  =   RDK.AddFile( \'Fanuc-M-710iC-50.robot\' ) \n # Get the default robot base frame \n robot_frame  =   RDK.Item( \'Fanuc M-710iC/50 Base\' ) \n # Move the base frame to the origin \n robot_frame.setPose(transl( 0 , 0 , 0 )) \n \xa0 \n # Add a tool to an existing robot: \n tool  =   RDK.AddFile(dir_path  +   \'/MainTool.tool\' , robot) \n \xa0 \n # Add table 1 \n table1_frame  =   RDK.AddFrame( \'Table 1\' ) \n table1_frame.setPose(transl( 807.766544 , - 963.699898 , 41.478944 )) \n table1_stl  =   RDK.AddFile(dir_path  +   \'/Table.stl\' , table1_frame) \n \xa0 \n # Add table 2 \n table2_frame  =   RDK.AddFrame( \'Table 2\' ) \n table2_frame.setPose(transl( 926.465508 , 337.151529 , 94.871928 )) \n table2_stl  =   RDK.AddFile(dir_path  +   \'/Table.stl\' , table2_frame) \n \xa0 \n # Calculate tool frames for the suction cup tool of 6 suction cups \n TCP_list  =   [] \n for   i  in   range (nTCPs): \n TCPi_pose  =   transl( 0 , 0 , 100 ) * rotz(( 360 / nTCPs) * i * pi / 180 ) * transl( 125 , 0 , 0 ) * roty(pi / 2 ) \n TCPi  =   robot.AddTool(TCPi_pose,  \'TCP %i\'   %   (i + 1 )) \n TCP_list.append(TCPi) \n \xa0 \n TCP_0  =   TCP_list[ 0 ] \n \xa0 \n # Turn on automatic rendering \n RDK.Render( True ) \n \xa0 \n # Add balls \n # create a list with 30 elements \n balls  =   [ None   for   _  in   range ( 30 )] \n layer  =   [ 16 ,  9 ,  4 ,  1 ] \n count  =   0 \n for   i  in   range ( len (balls_list)): \n # transl(balls_list) \n balls[i]  =   RDK.AddFile( \'./ball.stl\' , table1_frame) \n balls[i].setPose(transl(balls_list[i])) \n count  =   count  +   1 \n if   count < =   16 : \n balls[i].setColor([ 1 ,  0 ,  0 ]) \n elif   count >  16   and   count < =   25 : \n balls[i].setColor([ 0 ,  1 ,  0 ]) \n elif   count >  25   and   count < = 29 : \n balls[i].setColor([ 1 ,  1 ,  0 ]) \n else : \n balls[i].setColor([ 0 ,  0 ,  1 ]) \n \xa0 \n # Make a list of positions to place the objects \n # ball_list is the same as frame1_list \n frame1_list  =   pyramid_calc( 4 ) \n frame2_list  =   pyramid_calc( 4 ) \n \xa0 \n # Move balls \n robot.setPoseTool(TCP_list[ 0 ]) \n nballs_frame1  =   len (frame1_list) \n nballs_frame2  =   len (frame2_list) \n idTake  =   nballs_frame1  -   1 \n idLeave  =   0 \n idTCP  =   0 \n \xa0 \n target_app_frame  =   transl( 2 * BALL_DIAMETER,  2 * BALL_DIAMETER,  4 * BALL_DIAMETER) * roty(pi) * transl( 0 , 0 , - APPROACH) \n \xa0 \n # frame1 is the same as table1_frame \n frame1  =   RDK.Item( \'Table 1\' ) \n frame2  =   RDK.Item( \'Table 2\' ) \n \xa0 \n while   idTake > =   0 : \n # ------------------------------------------------------------------ \n # first priority: grab as many balls as possible \n # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs) \n ntake  =   min (nTCPs, idTake  +   1 ) \n \xa0 \n # approach to frame 1 \n robot.setPoseFrame(frame1) \n robot.setPoseTool(TCP_0) \n robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n robot.MoveJ(target_app_frame) \n \xa0 \n # grab ntake balls from frame1 \n for   i  in   range (ntake): \n TCPi  =   TCP_list[i] \n robot.setPoseTool(TCPi) \n # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted \n target  =   transl(frame1_list[idTake]) * roty(pi) * rotx( 30 * pi / 180 ) \n target_app  =   target * transl( 0 , 0 , - APPROACH) \n idTake  =   idTake  -   1 \n robot.MoveL(target_app) \n robot.MoveL(target) \n TCP_On(TCPi, i) \n robot.MoveL(target_app) \n \xa0 \n # ------------------------------------------------------------------ \n # second priority: unload the tool \n # approach to frame2 and place the tool balls into table2 \n robot.setPoseTool(TCP_0) \n robot.MoveJ(target_app_frame) \n robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n robot.setPoseFrame(frame2) \n robot.MoveJ(target_app_frame) \n for   i  in   range (ntake): \n TCPi  =   TCP_list[i] \n robot.setPoseTool(TCPi) \n if   idLeave > nballs_frame2 - 1 : \n raise   Exception( "No room left to place objects in Table 2" ) \n \xa0 \n # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted \n target  =   transl(frame2_list[idLeave]) * roty(pi) * rotx( 30 * pi / 180 ) \n target_app  =   target * transl( 0 , 0 , - APPROACH) \n idLeave  =   idLeave  +   1 \n robot.MoveL(target_app) \n robot.MoveL(target) \n TCP_Off(TCPi, i, frame2) \n robot.MoveL(target_app) \n \xa0 \n robot.MoveJ(target_app_frame) \n \xa0 \n # Move home when the robot finishes \n robot.MoveJ([ 0 , 0 , 0 , 0 , 10 , - 200 ]) \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '取分項目1，參考 \n Week14 \n def stu2b(account): \xa0return account teamb = [] \xa0\xa0\xa0 with open("stage3_2b.txt") as fh:\xa0\xa0\xa0\xa0 #讀取stage3_2b的檔案 \xa0\xa0\xa0\xa0data = fh.readlines() \xa0\xa0\xa0\xa0data = [a.replace(\'40823231\',\'40823231-2\') for a in data]\xa0\xa0\xa0\xa0\xa0 #將40823231換成40823231-2 \xa0\xa0\xa0\xa0data = [a.replace(\'407\',\'s407\') for a in data]\xa0\xa0\xa0\xa0 #將有407的學號換成s407 \xa0\xa0 for i in range(len(data)):\xa0\xa0\xa0\xa0 #數據中會有\\n跟\\t，將\\n跟\\t去除 \xa0\xa0\xa0\xa0group = data[i].rstrip("\\n").split("\\t") \xa0\xa0\xa0\xa0teamb.append(group) \xa0\xa0\xa0\xa0\xa0\xa0\xa0 output = ""\xa0\xa0\xa0  seperator = "-"*10 + "</br>"\xa0\xa0\xa0\xa0 #分隔號製作 \xa0\xa0\xa0 for i in teamb[0:]:\xa0\xa0\xa0 #小組 組長 其他六個組員 \xa0\xa0\xa0\xa0team = i[0] \xa0\xa0\xa0\xa0leader = stu2b(i[1]) \xa0\xa0\xa0\xa0m1 = stu2b(i[3]) \xa0\xa0\xa0\xa0m2 = stu2b(i[5]) \xa0\xa0\xa0\xa0m3 = stu2b(i[7]) \xa0\xa0\xa0\xa0m4 = stu2b(i[9]) \xa0\xa0\xa0\xa0m5 = stu2b(i[11]) \xa0\xa0\xa0\xa0m6 = stu2b(i[13]) \xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0leaderrepo = "<a href=\'http://github.com/" + leader + "/cd2021\'>" + leader + " repo</a>"\xa0\xa0\xa0 #組長以及組員的倉儲和網站 \xa0\xa0\xa0\xa0leadersite = "<a href=\'http://" + leader + ".github.io/cd2021\'>" + leader +\xa0 " site</a>" \xa0\xa0\xa0\xa0m1repo = "<a href=\'http://github.com/" + m1 + "/cd2021\'>" + m1 + " repo</a>" \xa0\xa0\xa0\xa0m1site = "<a href=\'http://" + m1 + ".github.io/cd2021\'>" + m1 +\xa0 " site</a>" \xa0\xa0\xa0\xa0m2repo = "<a href=\'http://github.com/" + m2 + "/cd2021\'>" + m2 + " repo</a>" \xa0\xa0\xa0\xa0m2site = "<a href=\'http://" + m2 + ".github.io/cd2021\'>" + m2 +\xa0 " site</a>" \xa0\xa0\xa0\xa0m3repo = "<a href=\'http://github.com/" + m3 + "/cd2021\'>" + m3 + " repo</a>" \xa0\xa0\xa0\xa0m3site = "<a href=\'http://" + m3 + ".github.io/cd2021\'>" + m3 +\xa0 " site</a>" \xa0\xa0\xa0\xa0m4repo = "<a href=\'http://github.com/" + m4 + "/cd2021\'>" + m4 + " repo</a>" \xa0\xa0\xa0\xa0m4site = "<a href=\'http://" + m4 + ".github.io/cd2021\'>" + m4 +\xa0 " site</a>" \xa0\xa0\xa0\xa0m5repo = "<a href=\'http://github.com/" + m5 + "/cd2021\'>" + m5 + " repo</a>" \xa0\xa0\xa0\xa0m5site = "<a href=\'http://" + m5 + ".github.io/cd2021\'>" + m5 +\xa0 " site</a>" \xa0\xa0\xa0\xa0m6repo = "<a href=\'http://github.com/" + m6 + "/cd2021\'>" + m6 + " repo</a>" \xa0\xa0\xa0\xa0m6site = "<a href=\'http://" + m6 + ".github.io/cd2021\'>" + m6 +\xa0 " site</a>" \xa0\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0\xa0teamrepo = "<a href=\'http://github.com/" + leader + "/" + team + "\'>" + team + " repo</a>"\xa0\xa0\xa0\xa0 #小組的倉儲含網站 \xa0\xa0\xa0\xa0teamsite =\xa0 "<a href=\'http://" + m1 + ".github.io/" + team + "\'>" + team +\xa0 " site</a>" \xa0\xa0\xa0 \xa0\xa0\xa0\xa0output += teamrepo + " | " + teamsite + " | " +leaderrepo + " | " + leadersite + " | " +m1repo + " | " + m1site + " | " +m2repo + " | " + m2site + " | " +m3repo + " | " + m3site + " | " +m4repo + " | " + m4site + " | " +m5repo + " | " + m5site + " | " +m6repo + " | " + m6site  \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0try: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0m7 = stu2b(i[15])\xa0\xa0\xa0\xa0 #第七個組員 \xa0\xa0\xa0\xa0except: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0m7 = "" \xa0\xa0\xa0\xa0try: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0m8 = stu2b(i[17])\xa0\xa0\xa0\xa0 #第八個組員 \xa0\xa0\xa0\xa0except: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0m8 = "" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0if m7 != "": \xa0\xa0\xa0\xa0\xa0\xa0\xa0m7repo = "<a href=\'http://github.com/" + m7 + "/cd2021\'>" + m7 + " repo</a>"\xa0\xa0\xa0\xa0 #如果有第七個組員會再加倉儲和網站沒有的話就空白 \xa0\xa0\xa0\xa0\xa0\xa0\xa0m7site = "<a href=\'http://" + m7 + ".github.io/cd2021\'>" + m7 +\xa0 " site</a>"\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0output += " |\xa0 " + m7repo + "| " + m7site \xa0\xa0\xa0\xa0else: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0output += ""  \xa0\xa0\xa0\xa0\xa0\xa0\xa0 \xa0\xa0\xa0\xa0if m8 != "": \xa0\xa0\xa0\xa0\xa0\xa0\xa0m8repo = "<a href=\'http://github.com/" + m8 + "/cd2021\'>" + m8 + " repo</a>"\xa0\xa0\xa0\xa0 #如果有第八個組員會再加倉儲和網站最後再加分隔線 \xa0\xa0\xa0\xa0\xa0\xa0\xa0m8site = "<a href=\'http://" + m8 + ".github.io/cd2021\'>" + m8 +\xa0 " site</a>"\xa0 \xa0\xa0\xa0\xa0\xa0\xa0\xa0output += " |\xa0 " + m8repo + "| " + m8site + "<br />" + seperator \xa0\xa0\xa0\xa0else: \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0output += "<br />" + seperator \xa0\xa0\xa0 \xa0\xa0\xa0 print(output)\xa0\xa0\xa0\xa0 #輸出 \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': 'W15取分項目1由我負責，證據於 6/4號小組討論 中的meet文字討論欄中 \n 影片1 \n \n 影片字幕中文(google翻譯): \n 我們在前面看到了這個簡單的雙連桿機器人 關於正向運動學的講座。 \n 描述了該機器人的工具提示位姿 簡單地由兩個數字，坐標 x 和 \n y 相對於世界坐標系。 \n 所以，這里的問題是，給定 x 和 y， 我們要確定連接的角度 Q1 \n 和 Q2。 \n 我們將遵循的解決方案 在這個特定的部分是一個幾何 \n 一。 \n 我們將從一個簡單的作品開始 的建設。 \n 我們將覆蓋紅色三角形 在我們的機器人之上。 \n 我們知道終點坐標是x， y，所以三角形的垂直高度 \n 是 y，水平寬度是 x。 \n 並且，使用畢達哥拉斯定理，我們可以寫出 r 平方等於 x 平方加上 y 平方。 \n 到目前為止，很容易。 \n 現在，我們要看看這個三角形 此處以紅色突出顯示，我們想確定 \n 角度α。 \n 為了做到這一點，我們需要使用余弦 規則。 \n 而且，如果你對余弦有點生疏 規則，這里有一點覆習。 \n 我們有一個任意三角形。 \n 我們不必有任何直角 它，我們將標記長度 \n 這條邊作為 A 和相反的角度 邊緣，我們將標記為小 a。 \n 而且，我們對這條邊和這條邊做同樣的事情 角度，還有這條邊和這個角。 \n 所以，總而言之，雙方都被標記為首都 A、B 和 C，角度標記為小 \n a、小b和小c。 \n 所以，余弦規則就是這種關系 這里。 \n 這有點像畢達哥拉斯定理，除了 對於這個額外的術語，最後的 cos \n 一個在里面。 \n 現在，讓我們將余弦規則應用於 我們看了一會兒特定的三角形 \n 前。 \n 寫下來很簡單 這種特殊的關系。 \n 我們可以隔離術語 cos alpha，它給出 我們感興趣的角度α \n 在。 \n 而且，它是根據常數定義的 鏈接長度，A1 和 A2 以及位置 \n 末端執行器，x 和 y。 \n 我們可以寫出這個簡單的關系 角α和Q2。 \n 而且，我們從余弦的形狀知道 Q2 的 cos 必須等於負的函數 \n cos 阿爾法。 \n 這一次，我們只寫一個表達式 對於連接角 Q2 的余弦。 \n 現在，我們要再畫一個紅色 三角形，我們將應用一些簡單的 \n 三角函數在這里。 \n 如果我們知道 Q2，那麽我們就知道這個長度和 這個紅色三角形的長度。 \n 我們可以把這個關系寫成正弦 的連接角 Q2。 \n 現在，我們可以考慮這個更大的三角形 其角為β，此邊長為 \n 三角形在這里以藍色給出。 \n 並且，三角形另一邊的長度 這是。 \n 所以，現在我們可以寫一個表達式 此處的這些參數的角度β。 \n 回到我們畫的紅色三角形 之前，我們可以建立之間的關系 \n Q1 和角β。 \n 介紹另一個角度，這個伽馬 我們可以寫出之間的關系 \n 角度伽馬和工具提示坐標 x 和y。 \n 現在，我們可以寫出一個簡單的關系 我們構建的角度，伽馬 \n 和 beta 以及我們感興趣的連接角 其中是 Q1。 \n 而且，總的關系看起來有些東西 像這樣。 \n 相當覆雜的關系，它給了我們 連接的角度，即 Q1 \n 末端執行器坐標 y 和 x，以及 一堆常量，a1 和 a2，它是 \n 也是第二關節角度的函數， Q2。 \n 所以，讓我們總結一下我們有什麽 派生於此。 \n 我們有 Q2 的余弦表達式 我們有 Q1 的表達式。 \n 現在，余弦函數關於 0. \n 所以，如果我們知道余弦值 Q2，那麽有兩種可能的解決方案， \n 一個正角和一個負角。 \n 我們將明確選擇積極的 角度，這意味著我可以寫出這個表達式 \n 這里。 \n 現在，我們有了我們所說的逆 這個雙連桿機器人的運動學解決方案。 \n 我們有兩個連接角的表達式， Q1 和 Q2 在末端執行器姿勢方面 \n x 和 y，以及一堆常量。 \n 你注意到這兩個方程不是 獨立的。 \n 事實上，Q1 的方程取決於 Q2 的解決方案。 \n 在這種情況下，Q2 是負數，我們將 用負數寫出 Q2 的解 \n 符號在反余弦前面。 \n 現在，我們需要解決 Q1，所以我們要 介紹這個特殊的紅色三角形， \n 我們之前求解的角度β， 以及用術語定義的角度伽馬 \n y 和 x。 \n 現在，我們寫一個稍微不同的關系 在 Q1、gamma 和 beta 之間，與什麽不同 \n 我們以前有過。 \n 涉及到符號的變化。 \n 然後，我們可以替換之前的所有 方程並提出這個表達式 \n 對於 Q1。 \n 同樣，這里的符號发生了變化。 \n 以前，這是一個負面信號。 \n 而且，這里是總結形式的解決方案 對於我們的雙連桿的逆運動學 \n 當機器人處於這種特定配置時， 其中 Q2 為負。 \n 讓我們比較兩種解決方案，案例 其中 Q2 為正，Q2 為正的情況 \n 是否定的。 \n 影片2 \n \n \n 影片字幕中文(google翻譯): \n 這里我們有與我們相同的兩個鏈接機器人 只是看著，但這次我們要 \n 使用分析方法解決它，即 我們是否會更多地依賴代數， \n 特定的線性代數而不是幾何。 我們有一個表達式 E，它是齊次的 \n 表示姿勢的變換 機器人終結者，我們看了這個 \n 在上一課中，我們可以編寫 endefector 構成一個基本齊次序列 \n 轉換。 Q1 的旋轉，平移 沿 X 方向 A1，旋轉 \n Q2 然後在 X 方向上平移 通過 A2。如果我展開這個，乘以所有 \n 一起轉換，我得到了表達 顯示在這里；三乘三同構變換 \n 表示機器人姿態的矩陣 終結者。 \n 現在對於這個特殊的兩連桿機器人，我們 只對它的位置感興趣 \n endefector，它是 X 和 Y 坐標，它們 這兩個元素是同質的嗎 \n 變換矩陣，所以我要覆制 那些出來。所以這里又是我們的表達 \n 對於 X 和 Y 我們要做的是 一個相當常見的技巧，我們要平方 \n 並添加這兩個方程，我得到了一個關系 看起來像這樣。現在我可以解決 \n 根據 endefector 的關節角度 Q2 姿勢 X 和 Y 以及機器人的常數 A1 和 A2。 \n 現在我要做的是應用總和 的角度身份。我要擴展這些 \n 項，Q1 的正弦加 Q2 或 Q1 的余弦加 Q2 為了讓生活更輕松一點，我 \n 打算建造一些變電站，所以無論在哪里 我有 cos Q2，我要寫 C2 以及在哪里 \n 曾經我有正弦 Q2，我要寫 S2。 這是一個相當常見的速記，當人們 \n 正在研究機器人運動學方程。 這是制作後的方程式 \n 替代品。看這兩個方程， 我可以看到他們掉進了一個很好的井里 \n 已知形式，對於該形式有一個非常 眾所周知的解決方案。所以我要考慮 \n 只是其中一個方程，方程為 Y 並使用我們眾所周知的身份 \n 解決方案，我可以確定 變量小a、小b和小c \n 一旦我確定了這些，我就可以 只需寫下 Q1 的解決方案，即 \n 在這個特定的情況下相當於 theta 案件。 \n 這里再次是我們對 Q1 的表達式，覆制 從上一張幻燈片結束，我們可能還記得 \n 從我們早期的工作中我們確定 這種特殊的關系； X平方加 \n Y 平方等於這個特定的覆數 表達。所以我可以用和代替它 \n 做一些簡化，我最終得到這個 Q1 的表達式稍微簡單一些。和 \n 這是我得到的相同表達 上一節中的幾何方法。 \n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '本周取分項目 \n \n W16 Onshape \n 新W16 Onshape \n  2、3項 \n  新2、3項 \n 第四項 \n \n \n 4、5項參考， 程式 ，組別倉儲 W16 \n 4、5項嘗試補完中(6/25)\xa0 \n MTB_robot 的取放方塊流程規劃 (Process Planning): \n 1. Onshape 零組件繪製 (20%) \n 零組件必須在 \xa0 Onshape \xa0 繪圖, 並提供可公開分享之零組件連結於頁面及回報區中. \n 2. 建立 CoppeliaSim 4.1.0 MTB robot 場景 (20%) \n 請以自行繪製之零件輸入 CoppeliaSim 後, 組合為 MTB robot 模型, 並利用 Leo Editor 以 require 導入 Lua 程式運作, 分別控制各軸轉動示範, 所完成的所有檔案請存入 W16_exam 後壓縮為 W16_exam.7z 後送至個人 @gm 帳號下的 Google Drive 後將連結設為任何人皆可下載, 並將連結與操作嵌入影片放在 W16 頁面與回報區中 . \n 3. 手臂末端加入 components-gripper-suction pad 吸盤 (20%) \n 請接續上述 MTB robot, 在其末端接上 force sensor 後接上標準 suction pad 後, 分別導入 W15 週線上課程之鍵盤控制程式後, 拍攝影片示範 W15 線上課程中之操作與示範過程. \n 4. 逆向運動學函式 (20%) \n 請根據 W15 線上課程內容之 Inverse Kinematics 方程式 ( 影片1 \xa0 或 影片2 ), 以程式指定方塊取放之兩個位置 - (0.2, 0.7, 0.05) 與 (-0.3, -0.55, 0.05), 以前述 Leo Editor Lua 程式編寫方法, 分別採鍵盤控制與程式迴圈方式執行 W15 兩個指定位置之方塊取放. \n 5. Python remote API 逆向運動學函式 (20%) \n 請利用 Python remote API 程式重現以迴圈方式執行 W15 兩個指定位置之方塊取放.', 'tags': '', 'url': 'W16.html'}, {'title': 'W17', 'text': '\n', 'tags': '', 'url': 'W17.html'}, {'title': 'W18', 'text': '\n', 'tags': '', 'url': 'W18.html'}, {'title': 'stage1-bg27', 'text': '此次分組中我是組長，我們兩個思考了很久，最終決定以這個來進行，由另一個人進行繪圖模擬，我於繪圖中進行討論哪裡需要修改，而我則負責處理網頁，做報告，報告等。 \n 因為一些情況，我只做了pdf，其他東西都放在 網頁 中。 \n PDF \n 其餘內容於報告中口頭描述。 \n 小組的 模擬影片 \n STL檔沒有留存，也許另一個組員還留著。 \n', 'tags': '', 'url': 'stage1-bg27.html'}, {'title': 'stage2-bg8', 'text': '網站 \n 第二次分組組長為40623144 \n 我負責做 reveal 及分組部分頁面的調整。 \n 以及最後繳交的 PDF \xa0 \n commits 可以證明我所做的事情。 \n 較為可惜的是報告當時繪圖的人不在，緊急之下跳過許多關於繪圖的部分，導致報告的很爛。 \n  檔案下載  \n \n', 'tags': '', 'url': 'stage2-bg8.html'}, {'title': 'stage3-bg7', 'text': '網站 \n 題目延續stage2-bg8的內容，繼續往後進行。 \n  stage3組件 \n 本次我進行找資料、提出問題、實際修改。 \n 本次組件外觀以及我做的部分。 \n \n \n \n \n \n', 'tags': '', 'url': 'stage3-bg7.html'}, {'title': '倉庫', 'text': '原始網站刪除的東西還有部分筆記在此 \n 備註:記得前往github自己的帳戶中 seeting/gitgub page裡面將 Branch修改為 master \n 此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 建立可快速給其他人上傳的倉儲方法: \n 於init中之IP="***.***.***.***"改為IP="::" \n ，並以ipconfig /all獲得IP即可使所有人進入 \n 在網站上面放置可下載連結的方法 \n 將檔案放進倉儲中，上傳後於倉儲找到檔案連結，右鍵點擊箭頭位置，按檢查獲得代碼，更改其網址，範例: https://github.com/40823233/cad2020/raw/master/download/40823233.ipt \n \n 倉儲複製(有子模組適用) \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n 這是還沒有設定使用者時的代碼。 \n git clone --recurse-submodules \xa0 https://github.com/40823233/cp2019.git \n 這是我的倉儲的複製方法。 \n 若資料遺失 可 使用gitcheckout .回復到上一版倉儲 \n 上傳三連 \n git add . \n git commit -m\xa0 "add repositere link" \n git push \n 然後打帳號密碼，如果中途有錯的話cmd上面會告訴你叫你打一些東西，好了之後重複上述動作應該就行了。 \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以git子模塊添加\xa0 \xa0 https://github.com/mdecourse/cmsimde \xa0 \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n 數學符號與方程式 \n Inline math equations go in like so: \xa0 ω = d ϕ / d t ω = d ϕ / d t . Display math should get its own line and be put in in double-dollarsigns: \n I = ∫ ρ R 2 d V \n \n 於cad2020課程中所學到的軟體，程式: \n \n \n 1.錄影,截圖,筆記:ShaerX,zoomit. \n 2.繪圖軟體: NX, Solidworks, Inventor, Onshape, Solvespace \n 3.github程式組成: \n \n 2020cad:學習如何使用程式對各繪圖軟體繪出的圖進行大量複製並小幅度修改 \n 利用MARKDOWN 寫投影片 \n 以下利用 Markdown 格式展示 Python 程式碼: \n # use threading  and  subprocess to threading the make process\n import  os\n import  subprocess\n import  threading\n\ndef domake():\n\n     path  =  "../exposed/api/exposed" \n    ubuntu =  "../Ubuntu" \n\n    # create obj  path \n\n     if   not  os. path .exists( path + "/../obj" ):\n        os.makedirs( path + "/../obj" )\n\n    subprocess.call([ "make" ,  "clean" ], cwd= path )\n    subprocess.call( "make" , cwd= path )\n    subprocess.call([ "cp" ,  "{libslvs.so, _slvs.so, slvs.py}" , ubuntu], cwd= path )\n    subprocess.call([ "python3" ,  "circle_ex.py" ], cwd= path + "/" +ubuntu)\n\nmake = threading.Thread(target=domake)\nmake.start() \n 使用 iframe 導入影片 導入影片 template 導入結果如下 \n \n \n This is  https://github.com/mdecourse/cmstemplate \n 目前的 cmsimde 在編輯器下方新增一個 csave 按鈕, 意即 collabrative save, 當動態網際管理系統在多人同時維護登入維護網頁內容時, 編輯各頁面時段, 該頁面可能已經改版, 因此使用 csave 按鈕存檔時, 會導入當下最新的該頁面內容, 並試圖與編輯中的頁面內容進行合併. \n 使用 csave 按鈕存檔無法刪除頁面資料. \n 使用 Edit All 模式, 無法使用 csave 按鈕（尚未測試). \n \n', 'tags': '', 'url': '倉庫.html'}]};