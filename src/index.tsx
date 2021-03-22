import * as React from "react";
import { FunctionComponent, useState, ChangeEvent, Fragment } from "react";

// OUTSIDE COMPONENTS
import { makeStyles, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Image from "react-bootstrap/Image";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import HealingIcon from "@material-ui/icons/Healing";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";
import PatientIcon from "@material-ui/icons/AccountCircle";
// import MenuIcon from "@material-ui/icons/Menu";

interface MenuSliderF3MProps {
  /**
   * empty
   */
  sectionsItems?: Array<{ link: string; icon: string; itemTitle: string }>;
  /**
   * empty
   */
  userLinks?: Array<{
    classNames: string;
    onClick: React.MouseEventHandler<any>;
    name: string;
  }>;
  /**
   * empty
   */
  onClickCloseIcon?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * empty
   */
  editLinkList?: string;
  /**
   * empty
   */
  editLinkListClick?: React.MouseEventHandler<any>;
  /**
   * empty
   */
  listOfLinks?: Array<{ rowKey: any; name: string }>;
  /**
   * empty
   */
  selectedItemList?: boolean;
  /**
   * empty
   */
  expandedPanelListOfLinks?: boolean;
  /**
   * empty
   */
  onChangeExpandedPanelListOfLinks?: (
    event: ChangeEvent<{}>,
    expanded: boolean
  ) => void | undefined;
  /**
   * empty
   */
  expandedIconColor?:
    | "inherit"
    | "disabled"
    | "primary"
    | "secondary"
    | "action"
    | "error"
    | undefined;
  /**
   * empty
   */
  linkSelectedName?: string;
  /**
   * empty
   */
  onClickLinkList?: React.MouseEventHandler<any>;
  /**
   * empty
   */
  userName?: string;
  /**
   * empty
   */
  userSpeciality?: string;
  /**
   * empty
   */
  userImageClasses?: string;
  /**
   * empty
   */
  hasImage?: boolean;
  /**
   * empty
   */
  pathUserPhoto?: string;
  /**
   * defaultPathUserPhoto
   */
  defaultPathUserPhoto?: any;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "&.MuiList-root": {
      position: "absolute",
      right: 0,
      left: 0,
      top: 120,
      [theme.breakpoints.up("sm")]: {
        top: 130,
      },
    },
  },
  underlineHover: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  positionFixed: {
    position: "fixed",
  },
  HeightOneHundred: {
    height: "100%",
  },
  WidthOneHundred: {
    width: "100%",
  },
  PositionFixed: {
    position: "fixed",
  },
  PositionAbsolute: {
    position: "absolute",
  },
  MenuContainer: {
    zIndex: 2,
    right: 0,
    width: "75%",
    overflowY: "scroll",
  },
  Menu: {
    zIndex: 2,
    width: "75%",
    background: "#FCFCFC",
    position: "fixed",
    right: 0,
  },
  BottomZero: {
    bottom: 0,
  },
  buttonLink: {
    color: "#",
    width: 183,
    textAlign: "left",
    height: 40,
    lineHeight: 3,
  },
  textUppercase: {
    textTransform: "uppercase",
  },
  myAuto: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  pl3: {
    paddingLeft: 10,
  },
  FloatRight: {
    float: "right",
  },
  BackgroundSideBar: {
    background: "#FCFCFC",
  },
  HeightController: {
    [theme.breakpoints.between(0, 350)]: {
      maxHeight: 510,
      overflow: "scroll",
    },
    [theme.breakpoints.between(351, 400)]: {
      maxHeight: 580,
      overflow: "scroll",
    },
    [theme.breakpoints.between(401, 600)]: {
      maxHeight: 650,
      overflow: "scroll",
    },
  },
  PaperElevation: {
    boxShadow: "none",
    background: "unset",
    //color: mainText,
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  },
  DisplayLgNone: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  borderExpandMenu: {
    borderColor: "#4949492a",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
  },
  py3: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  py4: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  mx4: {
    marginRight: 15,
    marginLeft: 15,
  },
  textLeft: {
    textAlign: "left",
  },
  mt4: {
    marginTop: 15,
  },
  mr3: {
    marginRight: 10,
  },
  mtMd4: {
    [theme.breakpoints.up("md")]: {
      marginTop: 15,
    },
  },
  mrMd4: {
    [theme.breakpoints.up("md")]: {
      marginRight: 15,
    },
  },

  pb4: {
    paddingBottom: 15,
  },

  pl5: {
    paddingLeft: 20,
  },

  mb5: {
    marginBottom: 20,
  },

  ml5: {
    marginLeft: 20,
  },

  mr4: {
    marginRight: 15,
  },

  dBlock: {
    display: "block",
  },
  breakText: {
    wordBreak: "break-all",
  },
  cursorPointer: {
    cursor: "pointer",
  },
  flexColumn: {
    flexDirection: "column",
  },
  institutionItem: {
    fontSize: 16,
    //fontfamily: ""Nunito, sans-serif",
    color: "#494949",
  },
  fontWeightBold: {
    fontWeight: 700,
  },
  noPaddingY: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  m0: {
    margin: 0,
  },
  dLgNone: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  mr1: {
    marginRight: 2.5,
  },
  idDropdown: {
    lineHeight: 1.2,
    color: "#494949",
  },
  fitPhoto: {
    objectFit: "cover",
  },
  borderImageHeader: {
    borderColor: "#DCDCDC",
    border: 2,
  },
  paddingVerticalNav: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 60,
    },
  },
  centerNavbar: {
    textAlign: "center",
    zIndex: 10004,
  },
  floatLeft: {
    float: "left",
  },
  dNone: {
    display: "none",
  },
  dLgFlex: {
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  flexDirectionColumn: {
    flexDirection: "column",
  },
  dFlex: {
    display: "flex",
  },
  navLinkSize: {
    width: 60,
    height: 60,
    padding: 10,
    /* "&.selected": {
      background: map-get($theme-colors, primary-transparent);
      border-left: 0.3rem solid map-get($theme-colors, primary);
    } */
  },
  eraseMarginY: {
    "&.Mui-expanded": {
      marginLeft: 15,
      marginRight: 15,
      "&:last-child": {
        marginBottom: 16,
      },
    },
  },
}));

let tabs;

const MenuSliderF3M: FunctionComponent<MenuSliderF3MProps> = ({
  sectionsItems = [
    {
      link: "/",
      icon: (
        <IconButton
          color="primary"
          size="small"
          aria-label="f3m"
          /* className="align-text-top" */
          /* onClick={this.onClickDashboard} */
        >
          <DashboardIcon fontSize="large"></DashboardIcon>
          {/* <Image fluid className="my-auto" src={DashboardIcon} alt="logo" /> */}
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
          }}
          /* onClick={this.onClickDashboard} */
        >
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
          aria-label="f3m"
          /* onClick={this.onClickSettingsHome} */
        >
          <SettingsIcon fontSize="large" />

          {/*  <Image fluid src={settingsIcon} alt="logo" /> */}
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
          }}
          /* onClick={this.onClickSettingsHome} */
        >
          {/* {t("navBar.Admin")} */}
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
          aria-label="f3m"
          /* onClick={this.onClickWounds} */
        >
          <HealingIcon fontSize="large"></HealingIcon>
          {/* <Image fluid className="my-auto" src={woundsIcon} alt="logo" /> */}
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
          }}
          // onClick={this.onClickWounds}
        >
          {/* {t("navBar.wounds")} */}
          WOUNDS
        </Box>
      ),
    },
  ],
  userLinks = [
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
  onClickCloseIcon,
  editLinkList = "Edit",
  editLinkListClick,
  listOfLinks = [
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
  ],
  selectedItemList,
  expandedPanelListOfLinks,
  onChangeExpandedPanelListOfLinks,
  expandedIconColor = "inherit",
  linkSelectedName = "SelectedLink",
  onClickLinkList,
  userName = "Jane Doe",
  userSpeciality = "Nurse",
  userImageClasses,
  hasImage = false,
  pathUserPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/440px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg",
  defaultPathUserPhoto = "https://icons-for-free.com/iconfiles/png/512/timer+icon-1320183326214705150.png",
}) => {
  const [
    isMenuOpen,
    // setIsMenuOpen
  ] = useState(true);

  const styleClass = useStyles();

  // let listOfInstitutions =
  //   JSON.parse(this.props.login.listOfInstitutions) || [];

  // sort by name
  listOfLinks.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  return (
    <>
      <div
        className={
          isMenuOpen
            ? ""
            : `${styleClass.HeightOneHundred} ${styleClass.paddingVerticalNav}`
        }
      >
        {isMenuOpen ? (
          <div
            className={`${styleClass.PositionFixed} ${styleClass.MenuContainer} ${styleClass.HeightOneHundred}`}
          >
            <div
              className={`${styleClass.HeightOneHundred} ${styleClass.PositionAbsolute} ${styleClass.Menu} ${styleClass.BottomZero}`}
            >
              <div>
                <IconButton
                  size="small"
                  className={`${styleClass.FloatRight} ${styleClass.mt4} ${styleClass.mr3} ${styleClass.mtMd4} ${styleClass.mrMd4}`}
                  onClick={onClickCloseIcon}
                >
                  <ClearIcon fontSize="large" />
                </IconButton>
                <List className={`${styleClass.root}`}>
                  {sectionsItems.map((item) => (
                    <ListItem
                      button
                      className={`${styleClass.py4}`}
                      selected={selectedItemList}
                    >
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.itemTitle} />
                    </ListItem>
                  ))}
                </List>

                <div
                  className={`${styleClass.PositionAbsolute} ${styleClass.BottomZero} ${styleClass.WidthOneHundred} ${styleClass.BackgroundSideBar} ${styleClass.HeightController}`}
                >
                  <ExpansionPanel
                    className={`${styleClass.DisplayLgNone} ${styleClass.borderExpandMenu} ${styleClass.eraseMarginY} ${styleClass.py3} ${styleClass.mx4} ${styleClass.PaperElevation}`}
                    expanded={expandedPanelListOfLinks}
                    onChange={onChangeExpandedPanelListOfLinks}
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon color={expandedIconColor} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Box
                        // fontFamily={SecondaryFont}
                        fontWeight={700}
                        fontSize={18}
                        className={`${styleClass.dBlock} ${styleClass.breakText}`}
                      >
                        {linkSelectedName}
                      </Box>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails
                      className={`${styleClass.flexColumn} ${styleClass.noPaddingY} ${styleClass.pb4} ${styleClass.pl5} ${styleClass.ml5}`}
                    >
                      <Link
                        className={`${styleClass.underlineHover} ${styleClass.institutionItem} ${styleClass.dBlock} ${styleClass.py3} ${styleClass.cursorPointer}`}
                        onClick={editLinkListClick}
                      >
                        {editLinkList}
                      </Link>
                      {listOfLinks.map((item) => (
                        <Fragment key={item.rowKey}>
                          <Link
                            className={`${styleClass.underlineHover} ${styleClass.cursorPointer} ${styleClass.fontWeightBold} ${styleClass.institutionItem} ${styleClass.py3} ${styleClass.breakText}`}
                            key={item.rowKey}
                            onClick={onClickLinkList}
                          >
                            {item.name}
                          </Link>
                        </Fragment>
                      ))}
                    </ExpansionPanelDetails>
                  </ExpansionPanel>

                  <ExpansionPanel
                    className={`${styleClass.dLgNone} ${styleClass.borderExpandMenu} ${styleClass.py3} ${styleClass.eraseMarginY} ${styleClass.mx4} ${styleClass.mb5} ${styleClass.PaperElevation}`}
                    /* expanded={this.state.isOpenExpansionUser}
                    onChange={(v) => this.onChangeExpandedUser(v)} */
                  >
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Image
                        id="bannerImage2"
                        className={`${userImageClasses} ${styleClass.mr4} ${styleClass.myAuto} ${styleClass.fitPhoto} ${styleClass.borderImageHeader}`}
                        roundedCircle
                        width="45"
                        height="45"
                        src={!hasImage ? defaultPathUserPhoto : pathUserPhoto}
                        /* onError={(event) => {
                          event.target.src = PatientIcon;
                          event.target.className = `${styleClass.mr4} ${styleClass.myAuto}`;
                        }} */
                      ></Image>
                      <div
                        className={`${styleClass.textLeft} ${styleClass.mr1} ${styleClass.myAuto}`}
                      >
                        <Box
                          // fontFamily={SecondaryFont}
                          fontWeight={700}
                          fontSize={18}
                          className={`${styleClass.dBlock}`}
                        >
                          {userName}
                        </Box>
                        <Box
                          // fontFamily={SecondaryFont}
                          fontSize={18}
                          className={`${styleClass.idDropdown} ${styleClass.m0}`}
                        >
                          {userSpeciality}
                        </Box>
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails
                      className={`${styleClass.noPaddingY} ${styleClass.pb4} ${styleClass.pl5} ${styleClass.ml5} ${styleClass.flexColumn}`}
                    >
                      {userLinks.map((item) => (
                        <Link
                          className={`${styleClass.underlineHover} ${item.classNames} ${styleClass.institutionItem} ${styleClass.dBlock} ${styleClass.py3} ${styleClass.cursorPointer}`}
                          onClick={item.onClick}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default MenuSliderF3M;
