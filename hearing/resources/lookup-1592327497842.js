(function(window, undefined) {
  var dictionary = {
    "b69d7b9f-1792-41e2-8494-9eb9ef0d6d3f": "ConfirmBeforeTest_otherside2",
    "55e5cb62-1618-40b5-91bf-07547d1e204a": "PureTuneTesting2",
    "93ad62b4-6f8d-4dfd-bad5-3cffd7dab422": "PureTuneTesting1",
    "ebeafb3c-1d62-482c-a9ff-f6c02617bbc5": "ConfirmBeforeTest_otherside1",
    "516df650-3fcd-49b6-9ea5-68d65c85cdbd": "ConfirmBeforeTest2",
    "77f2a385-05f3-4daa-822d-6357ebbd9d45": "ConfirmBeforeTest1",
    "2bd5c005-cfdc-41f6-a14e-0f4b8707d522": "Home2",
    "0b206888-e45c-47e9-859c-6a4fc4ffd780": "Guest",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "790dba61-9d13-49dd-a708-6366ec06f41f": "Headset",
    "e2923909-6561-49a1-84bf-96c4074c17b1": "Login",
    "578af040-5d46-4fa8-867d-cc64973f60fc": "SpeechInNoice2",
    "19ea93e2-9a27-446f-a8a5-3931fe239c29": "SpeechInNoice1",
    "e9466f08-8c91-4b5e-a384-3ebd188b1e73": "Register",
    "50b67562-be48-45b0-b7f9-3c417b6d1b71": "TestType",
    "dd511363-56cb-427f-88c3-b1f885e18325": "Questionair",
    "f2b24f13-fffe-4568-806a-4689f6138761": "Result",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);