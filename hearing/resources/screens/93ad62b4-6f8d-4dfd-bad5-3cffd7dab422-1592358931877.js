jQuery("#simulation")
  .on("click", ".s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Button span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Button span": {
                      "attributes": {
                        "color": "#007AFF"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_84")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Label_84 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Image_1 > svg": {
                      "attributes": {
                        "overlay": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Label_84 span": {
                      "attributes": {
                        "color": "#007DFF"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Image_1 > svg": {
                      "attributes": {
                        "overlay": "#157EFB"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ebeafb3c-1d62-482c-a9ff-f6c02617bbc5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button-blue_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Button-blue_10 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Button-blue_10 span": {
                      "attributes": {
                        "color": "#80B8F1"
                      }
                    }
                  },{
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Button-blue_10": {
                      "attributes-ie": {
                        "border-top-color": "#80B8F1",
                        "border-right-color": "#80B8F1",
                        "border-bottom-color": "#80B8F1",
                        "border-left-color": "#80B8F1"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Button-blue_10 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#F9F8FC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#F9F8FC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F9F8FC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#F9F8FC",
                        "border-radius": "7px 7px 7px 7px"
                      }
                    }
                  },{
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Button-blue_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Button-blue_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Button-blue_10 span": {
                      "attributes": {
                        "color": "#FF2D55",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 #s-Button-blue_10": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#F9F8FC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#F9F8FC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#F9F8FC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#F9F8FC",
                        "border-radius": "7px 7px 7px 7px"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/50b67562-be48-45b0-b7f9-3c417b6d1b71"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-93ad62b4-6f8d-4dfd-bad5-3cffd7dab422 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_2" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });