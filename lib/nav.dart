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
            bottom: const TabBar(
          isScrollable: true,
          tabAlignment: TabAlignment.center,
          labelPadding: EdgeInsets.symmetric(horizontal: 30.0),
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
        )),
        body: TabBarView(children: _tabs),
      ),
    );
  }
}
