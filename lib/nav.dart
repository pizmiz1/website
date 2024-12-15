import 'package:flutter/material.dart';
import 'package:website/screens/about.dart';
import 'package:website/screens/home.dart';
import 'package:website/screens/projects.dart';

class TabBarExample extends StatelessWidget {
  TabBarExample({super.key});

  final List<Widget> _tabs = [
    HomePage(),
    AboutPage(),
    ProjectsPage(),
  ];

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      initialIndex: 0,
      length: 3,
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
              ],
            )
          ]),
        )),
        body: TabBarView(
          children: _tabs,
        ),
      ),
    );
  }
}
