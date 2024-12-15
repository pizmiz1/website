import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        margin: EdgeInsets.only(top: 40),
        child: Column(children: [
          Center(
            child: Text(
              "Ethan Britton",
              textAlign: TextAlign.center,
              style: TextStyle(fontWeight: FontWeight.bold, fontSize: 40),
            ),
          ),
          Center(
            child: Text(
              "Home :)",
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 20),
            ),
          )
        ]));
  }
}
