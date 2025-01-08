import 'package:flutter/material.dart';
import 'package:website/screens/about.dart';
import 'package:website/screens/home.dart';
import 'package:website/screens/projects.dart';
import 'package:website/screens/resume.dart';
import "package:universal_html/html.dart" as html;

class MyTabBar extends StatefulWidget {
  const MyTabBar({super.key});
  @override
  _MyTabbedPageState createState() => _MyTabbedPageState();
}

class _MyTabbedPageState extends State<MyTabBar>
    with SingleTickerProviderStateMixin {
  List<bool> _isDisabled = [false, false, false, true];

  final List<Widget> _tabs = [
    HomePage(),
    AboutPage(),
    ProjectsPage(),
    ResumePage(),
  ];
  late TabController _tabController;

  onTap() {
    if (_isDisabled[_tabController.index]) {
      html.window.open(
          'https://drive.google.com/file/d/1RLb7hwPYYZhnpOgP_MYuaheu34BwYHSC/view?usp=sharing',
          'Resume');
      int index = _tabController.previousIndex;
      setState(() {
        _tabController.index = index;
      });
    }
  }

  @override
  void initState() {
    super.initState();
    _tabController = TabController(vsync: this, length: _tabs.length);
    _tabController.addListener(onTap);
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      initialIndex: 0,
      length: 4,
      child: Scaffold(
        appBar: AppBar(
            bottom: PreferredSize(
          preferredSize: Size.fromHeight(0),
          child: Row(children: [
            Expanded(
              child: Text(
                "TEST",
                style: TextStyle(color: Colors.transparent),
              ),
            ),
            TabBar(
              controller: _tabController,
              indicatorSize: TabBarIndicatorSize.tab,
              dividerColor: Colors.transparent,
              tabAlignment: TabAlignment.center,
              isScrollable: true,
              padding: EdgeInsets.only(right: 40),
              labelPadding: EdgeInsets.only(right: 30, left: 30),
              tabs: <Widget>[
                Tab(
                  text: "Home",
                ),
                Tab(
                  text: "About Me",
                ),
                Tab(
                  text: "Projects",
                ),
                Tab(
                  text: "Resume",
                ),
              ],
            )
          ]),
        )),
        body: TabBarView(
          controller: _tabController,
          children: _tabs,
        ),
      ),
    );
  }
}
