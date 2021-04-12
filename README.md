<p align="center">
  <a href="https://mpds.f3m.pt/" rel="noopener" target="_blank"><img width="350" src="https://i.imgur.com/OANOfLI.png" alt="MPDS logo"></a></p>
</p>

<h1 align="center">MpDS Side-Menu</h1>

<div align="center">

[React](https://reactjs.org/) component for faster and simpler web development.

<!--
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/master/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@material-ui/core/latest.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm next package](https://img.shields.io/npm/v/@material-ui/core/next.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm downloads](https://img.shields.io/npm/dm/@material-ui/core.svg)](https://www.npmjs.com/package/@material-ui/core)
[![CircleCI](https://img.shields.io/circleci/project/github/mui-org/material-ui/next.svg)](https://app.circleci.com/pipelines/github/mui-org/material-ui?branch=next)
[![Coverage Status](https://img.shields.io/codecov/c/github/mui-org/material-ui/next.svg)](https://codecov.io/gh/mui-org/material-ui/branch/next)
[![Follow on Twitter](https://img.shields.io/twitter/follow/MaterialUI.svg?label=follow+Material-UI)](https://twitter.com/MaterialUI)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=mui-org/material-ui)](https://dependabot.com)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/mui-org/material-ui.svg)](https://isitmaintained.com/project/mui-org/material-ui 'Average time to resolve an issue')
[![Crowdin](https://badges.crowdin.net/material-ui-docs/localized.svg)](https://translate.material-ui.com/project/material-ui-docs)
[![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/material-ui)](https://opencollective.com/material-ui) -->

</div>

## Installation

MpDS Side-Menu is available as an [npm package](npm i mpds-side-menu).

```sh
// with npm
npm i mpds-side-menu

```

## Usage

Here is a quick example to get you started, **it's all you need**:

```tsx
import * as React from "react";
import MpDSSideMenu from "mpds-side-menu";

function App() {
  return <MpDSSideMenu linkSelectedName="Link2"></MpDSSideMenu>;
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

<h4>Props</h4>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span>sectionsItems</span>
      </td>
      <td>
        <div>
          <span>Array that has all the information about the section items: link, icon and itemTitle.</span>
        </div>
        <div>
          <div>
            <span>Array<{ link: string; icon: string; itemTitle: string }></span>
          </div>
        </div>
      </td>
      <td>
        <span>[
          {
            link: "/",
            icon: (
              <IconButton
                color="primary"
                size="small"
                aria-label="f3m">
                <DashboardIcon fontSize="large"></DashboardIcon>
              </IconButton>
            )
            itemTitle: (
              <Box
                fontSize={14}
                fontWeight={700}
                fontFamily="Nunito"
                style={{
                  paddingLeft: 10,
                  marginTop: "auto",
                  marginBottom: "auto",
                  textTransform: "uppercase",
                  color: "#",
                  width: 183,
                  textAlign: "left",
                  height: 40,
                  lineHeight: 3,
                }}>
                Dashboard
              </Box>
            ),
          },
          {
            link: "/settings",
            icon: (
              <IconButton
                color="primary"
                size="small"
                aria-label="f3m">
                <SettingsIcon fontSize="large" />
              </IconButton>
            ),
            itemTitle: (
              <Box
                fontSize={14}
                fontWeight={700}
                fontFamily="Nunito"
                style={{
                  paddingLeft: 10,
                  marginTop: "auto",
                  marginBottom: "auto",
                  textTransform: "uppercase",
                  color: "#",
                  width: 183,
                  textAlign: "left",
                  height: 40,
                  lineHeight: 3,
                }}>
                Settings
              </Box>
            ),
          },
          {
            link: "/wounds",
            icon: (
              <IconButton
                color="primary"
                size="small"
                aria-label="f3m">
                <HealingIcon fontSize="large"></HealingIcon>
              </IconButton>
            ),
            itemTitle: (
              <Box
                fontSize={14}
                fontWeight={700}
                fontFamily="Nunito"
                style={{
                  paddingLeft: 10,
                  marginTop: "auto",
                  marginBottom: "auto",
                  textTransform: "uppercase",
                  color: "#",
                  width: 183,
                  textAlign: "left",
                  height: 40,
                  lineHeight: 3,
                }}>
                WOUNDS
              </Box>
            ),
          },
        ],    
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>userLinks</span>
      </td>
      <td>
        <div>
          <span>Array of objects that will build the links inside of the user accordion.</span>
        </div>
        <div>
          <div>
            <span>Array<{classNames: string; onClick: React.MouseEventHandler<any>;name: string;}></span>
          </div>
        </div>
      </td>
      <td>
        <span>[
          {
            classNames: "",
            onClick: console.log("Click!"),
            name: "Settings",
          },
          {
            classNames: "",
            onClick: console.log("Click!"),
            name: "Log Out",
          },
        ],
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>onClickCloseIcon</span>
      </td>
      <td>
        <div>
          <span>onClick to close the menu.</span>
        </div>
        <div>
          <div>
            <span>React.MouseEventHandler<HTMLButtonElement></span>
          </div>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>editLinkList</span>
      </td>
      <td>
        <div>
          <span>Name the main link to edit.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>"Edit"</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>editLinkListClick</span>
      </td>
      <td>
        <div>
          <span>onClick of the edit link.</span>
        </div>
        <div>
          <span>React.MouseEventHandler<any></span>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>listOfLinks</span>
      </td>
      <td>
        <div>
          <span>Array that has all the info of the links that can be selected.</span>
        </div>
        <div>
          <div>
            <span>Array<{ rowKey: any; name: string }></span>
          </div>
        </div>
      </td>
      <td>
        <span>[
            {
              rowKey: 1,
              name: "Link1",
            },
            {
              rowKey: 2,
              name: "Link2",
            },
            {
              rowKey: 3,
              name: "Link3",
            },
          ]
        </span>
      </td>
  </tr>
  <tr>
    <td>
      <span>selectedItemList</span>
    </td>
    <td>
      <div>
        <span>The selection values of the sections links.</span>
      </div>
      <div>
        <div>
          <span>boolean</span>
        </div>
      </div>
    </td>
    <td>
      <span>
        -
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>onChangeExpandedPanelListOfLinks</span>
    </td>
    <td>
      <div>
        <span>onChange of the expanded panel list of links.</span>
      </div>
      <div>
        <div>
          <span>(
            event: ChangeEvent<{}>,
            expanded: boolean
          ) => void | undefined;</span>
        </div>
      </div>
    </td>
    <td>
      <span>
        -
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>expandedIconColor</span>
    </td>
    <td>
      <div>
        <span>onChange of the expanded panel list of links.</span>
      </div>
      <div>
        <div>
          <span>
          "inherit" | "disabled" | "primary" | "secondary" | "action" | "error" | undefined;
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        "inherit"
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>linkSelectedName</span>
    </td>
    <td>
      <div>
        <span>The name of the selected link.</span>
      </div>
      <div>
        <div>
          <span>
            string
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        "SelectedLink"
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>selectedLinkColor</span>
    </td>
    <td>
      <div>
        <span>Color of the selected link.</span>
      </div>
      <div>
        <div>
          <span>
            "inherit" | "primary" | "secondary" | "error" | "initial" | "textPrimary" | "textSecondary" | undefined;
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        "textPrimary"
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>selectedLinkColor</span>
    </td>
    <td>
      <div>
        <span>Color of the selected link.</span>
      </div>
      <div>
        <div>
          <span>
            "inherit" | "primary" | "secondary" | "error" | "initial" | "textPrimary" | "textSecondary" | undefined;
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        "textPrimary"
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>selectedLinkColor</span>
    </td>
    <td>
      <div>
        <span>Color of the selected link.</span>
      </div>
      <div>
        <div>
          <span>"inherit" | "primary" | "secondary" | "error" | "initial" | "textPrimary" | "textSecondary" | undefined;
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        "textPrimary"
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>onClickLinkList</span>
    </td>
    <td>
      <div>
        <span>onClick of the links.</span>
      </div>
      <div>
        <div>
          <span>
            React.MouseEventHandler<any>
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        -
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>userName</span>
    </td>
    <td>
      <div>
        <span>Name of the userName.</span>
      </div>
      <div>
        <div>
          <span>
            string
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        "Jane Doe"
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>userNameColor</span>
    </td>
    <td>
      <div>
        <span>Color text of the userName.</span>
      </div>
      <div>
        <div>
          <span>
            string
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        "#494949"
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>userSpeciality</span>
    </td>
    <td>
      <div>
        <span>Speciality of the user.</span>
      </div>
      <div>
        <div>
          <span>
            string
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        "Nurse"
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>userSpecialityColor</span>
    </td>
    <td>
      <div>
        <span>Text color of user speciality.</span>
      </div>
      <div>
        <div>
          <span>
            string
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        "#494949"
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>userLinksColor</span>
    </td>
    <td>
      <div>
        <span>Text color of the user links.</span>
      </div>
      <div>
        <div>
          <span>
            "inherit" | "primary" | "secondary" | "error" | "initial" | "textPrimary" | "textSecondary" | undefined;
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        "textPrimary"
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>userImageClasses</span>
    </td>
    <td>
      <div>
        <span>Classes of the userImage.</span>
      </div>
      <div>
        <div>
          <span>
            string
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        -
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>hasImage</span>
    </td>
    <td>
      <div>
        <span>Boolean value of the image existence.</span>
      </div>
      <div>
        <div>
          <span>
            boolean
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        false
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>pathUserPhoto</span>
    </td>
    <td>
      <div>
        <span>User photo path.</span>
      </div>
      <div>
        <div>
          <span>
            string
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/440px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg"
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>defaultPathUserPhoto</span>
    </td>
    <td>
      <div>
        <span>Default user photo.</span>
      </div>
      <div>
        <div>
          <span>
            any
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        "https://icons-for-free.com/iconfiles/png/512/timer+icon-1320183326214705150.png"
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>menuColor</span>
    </td>
    <td>
      <div>
        <span>Background color of the menu.</span>
      </div>
      <div>
        <div>
          <span>
            string
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        #FCFCFC
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>isMenuOpenActive</span>
    </td>
    <td>
      <div>
        <span>Boolean value of the menu state expansion.</span>
      </div>
      <div>
        <div>
          <span>
            boolean
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        true
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>linksItemsTextColor</span>
    </td>
    <td>
      <div>
        <span>Text color of the links.</span>
      </div>
      <div>
        <div>
          <span>
            string
          </span>
        </div>
      </div>
    </td>
    <td>
      <span>
        "#494949"
      </span>
    </td>
  </tr>
  </tbody>
</table>
<br>
Yes, it's really all you need to get started! Try it in:
[CodeSandbox](https://codesandbox.io/)
<br>

## License

No License. "(...) nobody else can copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation."
