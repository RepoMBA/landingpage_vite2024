import React, { useState, useRef } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Divider, Collapse } from "@mui/material";
import {
  Menu as MenuIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Close,
} from "@mui/icons-material";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

type MenuItem = {
  content: JSX.Element;
  width: string;
};

const menuItems: Record<string, MenuItem> = {
  Product: {
    content: (
      <div>
        <div className="flex justify-center items-center">
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[900px] w-full bg-[#fff] rounded-none rounded-b-[20px] px-[10px]">
            <div className="p-1 flex flex-col gap-2">
              <div className="text-[15px] border-b-[1px] py-1 mb-1 text-[#f07346] border-b-[#f07346]">
                Apps
              </div>
              <a
                href="/contract-management-software"
                className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
              >
                Contract Management Software
              </a>
              <a
                href="https://legittai.com/legitt-lite"
                className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
              >
                Legitt Lite
              </a>
              <a
                href="https://legittai.com/legitt-pro"
                className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
              >
                Legitt Pro
              </a>
            </div>

            <div className="p-1 flex flex-col gap-3">
              <div className="text-[15px] border-b-[1px] py-1 mb-1 text-[#017e84] border-b-[#017e84]">
                AI Tools
              </div>

              <a
                href="https://legittai.com/contract-generator"
                className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
              >
                AI Contract Generator
              </a>
              <a
                href="https://legittai.com/contract-review"
                className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
              >
                AI Contract Review
              </a>
              <a
                href="https://legittai.com/repo-analyzer"
                className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
              >
                AI Repo Analyzer
              </a>
            </div>

            <div className="p-1 flex flex-col gap-3">
              <div className="text-[15px] border-b-[1px] py-1 mb-1 text-[#714b67] border-b-[#714b67]">
                Free Tools
              </div>
              <a
                href="https://legittai.com/electronic-signature"
                className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
              >
                e-Signature
              </a>
              <a
                href="https://legittai.com/free-contract-templates"
                className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
              >
                Free Contract Templates
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
    width: "40%",
  },
  Solutions: {
    content: (
      <div className="flex justify-center items-center">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-2 gap-4 max-w-[900px] w-full bg-[#fff] rounded-none rounded-b-[20px] px-[10px]">
          <div className="p-1 flex flex-col gap-2">
            <div className="text-[15px] border-b-[1px] py-1 mb-1 text-[#f07346] border-b-[#f07346]">
              Departments
            </div>
            <a
              href="/"
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              Legal
            </a>
            <a
              href="/"
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              Sales
            </a>{" "}
            <a
              href="/"
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              IT
            </a>
            <a
              href="/"
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              Finance
            </a>
          </div>

          <div className="p-1 flex flex-col gap-3">
            <div className="text-[15px] border-b-[1px] py-1 mb-1 text-[#017e84] border-b-[#017e84]">
              Integrations
            </div>

            <a
              href="/"
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              Salesforce
            </a>
            <a
              href="/"
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              Microsoft Dynamics
            </a>
            <a
              href="/"
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              Zoho
            </a>
            <a
              href="/"
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              Quickbook
            </a>
          </div>
        </div>
      </div>
    ),
    width: "30%",
  },
  Resources: {
    content: (
      <div className="flex justify-center items-center">
        <div className="flex flex max-w-[900px] w-full bg-[#fff] rounded-none rounded-b-[20px] px-[20px]">
          <div className="p-1 flex w-[200px] flex-col gap-2 col-span-1">
            {" "}
            <a
              href="/"
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              Glosary
            </a>
            <a
              href=""
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              eBooks
            </a>{" "}
            <a
              href=""
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              White Papers
            </a>
            <a
              href="https://legittai.com/release-notes"
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              Release Notes
            </a>
            <a
              href="https://legittai.com/videos"
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              Videos
            </a>
            <a
              href="https://legittai.com/product-tour"
              className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
            >
              Product Tour
            </a>
          </div>

          <div className="p-1 flex w-[250px] flex-col gap-2 col-span-1">
            <div className="text-[15px] border-b-[1px] py-1 mb-1 text-[#9b0242] border-b-[#9b0242]">
              Blogs
            </div>
            <div className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer">
              Discover the latest trends, best practices and more in the world
              of legal and legal tech.
            </div>
            <div className="flex justify-start items-center">
              <a href="https://legittai.com/blog/" className="common-button">
                See All
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
    width: "450px",
  },
  Company: {
    content: (
      <div>
        <div className="flex justify-center items-center">
          <div className="sm:grid sm:grid-cols-2 md:grid-cols-1 gap-4 max-w-[600px] w-full bg-[#fff] rounded-none rounded-b-[20px] px-[20px]">
            <div className="p-1 flex flex-col gap-2">
              {" "}
              <a
                href="https://legittai.com/about-us"
                className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
              >
                About Us
              </a>
              <a
                href="https://legittai.com/privacy-policy"
                className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
              >
                Privacy Policy
              </a>
              <a
                href="https://legittai.com/job-list"
                className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
              >
                Jobs & Careers
              </a>
              <a
                href="https://legittai.com/demo"
                className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
              >
                Schedule A Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
    width: "200px", // Adjusted width for the "Company" section
  },
};

export default function NewHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState<JSX.Element | null>(null);
  const [drawerWidth, setDrawerWidth] = useState<string>("100%");
  const [drawerPosition, setDrawerPosition] = useState<number>(0);
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);
  const [openMobileDrawerAccordion, setOpenMobileDrawerAccordion] =
    useState<string>("");
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);

  const handleHamburgerToggle = () => {
    setOpenMobileDrawer(!openMobileDrawer);
  };

  const handleAccordionToggle = (item: string) => {
    setOpenMobileDrawerAccordion(
      openMobileDrawerAccordion === item ? "" : item
    );
  };

  const handleDrawerOpen = (
    items: JSX.Element,
    width: string = "100%",
    index: number
  ) => {
    if (navRefs.current[index]) {
      const position = navRefs.current[index]!.getBoundingClientRect().left;
      setDrawerPosition(position);
    }

    setDrawerContent(items);
    setDrawerWidth(width);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <header>
        <nav className="bg-[#fff] border-gray-200  fixed top-0 w-full z-[999] ">
          <div className="flex justify-between items-center mx-auto max-w-screen-[1431px] px-[4%]">
            <a href="/" className="logo">
              <img
                src="https://d2qb2qddg7l6c6.cloudfront.net/assets/images/logo.png"
                alt="Logo"
                className="h-[61px]"
              />
            </a>
            <div className="flex items-center lg:order-2 gap-[10px] text-[14px]">
              <a
                href="https://app.legittai.com/signup"
                className="text-[#9b0242] hidden lg:flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
              >
                Try Free
              </a>
              <a
                href="https://app.legittai.com/"
                className="button-outline hidden lg:flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
              >
                Log in
              </a>
              <a
                href="https://legittai.com/demo"
                className="common-button hidden lg:flex justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
              >
                Schedule A Demo
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={handleHamburgerToggle}
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon />
              </button>
            </div>
            <div
              className={`justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ${
                openMobileDrawer ? "flex" : "hidden"
              }`}
              id="mobile-menu-2"
            >
              <ul className="nav-ul flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="nav-li relative">
                  <a
                    href="https://legittai.com/"
                    className="nav-a flex gap-1 items-center block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#9b0242] lg:p-0"
                  >
                    Home
                  </a>
                </li>
                {Object.entries(menuItems).map(([key, value], index) => (
                  <li
                    key={key}
                    className="nav-li relative"
                    ref={(el: HTMLLIElement | null) =>
                      void (navRefs.current[index] = el)
                    }
                    onClick={() =>
                      handleDrawerOpen(value.content, value.width, index)
                    }
                  >
                    <a
                      className={`cursor-pointer flex gap-1 items-center nav-a block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#9b0242] lg:p-0 ${
                        drawerOpen === true &&
                        drawerContent === value.content &&
                        "text-[#9b0242]"
                      }`}
                    >
                      {key}
                      {drawerOpen === true &&
                      drawerContent === value.content ? (
                        <BiChevronUp size={22} />
                      ) : (
                        <BiChevronDown size={22} />
                      )}
                      {/* <BiChevronDown size={22} /> */}
                    </a>
                  </li>
                ))}
                <li className="nav-li relative">
                  <a
                    href="https://legittai.com/pricing"
                    className="nav-a block py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#9b0242] lg:p-0"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerClose}
        className="top-nav-main-container"
        PaperProps={{
          style: {
            position: "absolute",
            // top: "64px",
            left: `${drawerPosition}px`,
            width: drawerWidth,
          },
        }}
      >
        <div className="drawer-content p-1">{drawerContent}</div>
      </Drawer>

      <Drawer
        anchor="right"
        className="mobile-drawer-main-container"
        open={openMobileDrawer}
        onClose={handleHamburgerToggle}
      >
        <div className="flex justify-end items-center px-4 py-1">
          <Close onClick={handleHamburgerToggle} />
        </div>
        <div className="w-[100%] px-4" role="presentation">
          {[
            "Home",
            "Products",
            "Resources",
            "Company",
            "Solutions",
            "Pricing",
          ].map((text) => (
            <div key={text}>
              <ListItem button onClick={() => handleAccordionToggle(text)}>
                {text === "Home" ? (
                  <a href="https://legittai.com/">
                    <ListItemText primary={text} />
                  </a>
                ) : text === "Pricing" ? (
                  <a href="https://legittai.com/pricing">
                    <ListItemText primary={text} />
                  </a>
                ) : (
                  <ListItemText primary={text} />
                )}
                {["Resources", "Products", "Company", "Solutions"].includes(
                  text
                ) &&
                  (openMobileDrawerAccordion === text ? (
                    <ExpandLessIcon />
                  ) : (
                    <ExpandMoreIcon />
                  ))}
              </ListItem>

              {["Resources", "Products", "Company", "Solutions"].includes(
                text
              ) && (
                <Collapse
                  in={openMobileDrawerAccordion === text}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {text === "Products" && (
                      <ListItem button className="pl-4 flex-col">
                        <div className="flex flex-col pl-[20px] gap-1 w-full">
                          <div className="text-[15px] border-b-[1px] w-full py-1 mb-1 text-[#f07346] border-b-[#f07346]">
                            Apps
                          </div>
                          <a
                            href="/contract-management-software"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Contract Management Software
                          </a>
                          <a
                            href="https://legittai.com/legitt-lite"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Legitt Lite
                          </a>
                          <a
                            href="https://legittai.com/legitt-pro"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Legitt Pro
                          </a>
                        </div>

                        <div className="flex flex-col pl-[20px] gap-1 w-full">
                          <div className="text-[15px] border-b-[1px] py-1 mb-1 text-[#017e84] border-b-[#017e84]">
                            AI Tools
                          </div>

                          <a
                            href="https://legittai.com/contract-generator"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            AI Contract Generator
                          </a>
                          <a
                            href="https://legittai.com/contract-review"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            AI Contract Review
                          </a>
                          <a
                            href="https://legittai.com/repo-analyzer"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            AI Repo Analyzer
                          </a>
                        </div>

                        <div className="flex flex-col pl-[20px] gap-1 w-full">
                          <div className="text-[15px] border-b-[1px] py-1 mb-1 text-[#714b67] border-b-[#714b67]">
                            Free Tools
                          </div>
                          <a
                            href="https://legittai.com/electronic-signature"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            e-Signature
                          </a>
                          <a
                            href="https://legittai.com/free-contract-templates"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Free Contract Templates
                          </a>
                        </div>
                      </ListItem>
                    )}{" "}
                    {text === "Solutions" && (
                      <ListItem button className="pl-4 flex-col">
                        <div className="flex flex-col pl-[20px] gap-1 w-full">
                          <div className="text-[15px] w-full border-b-[1px] py-1 mb-1 text-[#f07346] border-b-[#f07346]">
                            Departments
                          </div>
                          <a
                            href="/"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Legal
                          </a>
                          <a
                            href="/"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Sales
                          </a>{" "}
                          <a
                            href="/"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            IT
                          </a>
                          <a
                            href="/"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Finance
                          </a>
                        </div>

                        <div className="flex flex-col pl-[20px] gap-1 w-full">
                          <div className="text-[15px] border-b-[1px] py-1 mb-1 text-[#017e84] border-b-[#017e84]">
                            Integrations
                          </div>

                          <a
                            href="/"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Salesforce
                          </a>
                          <a
                            href="/"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Microsoft Dynamics
                          </a>
                          <a
                            href="/"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Zoho
                          </a>
                          <a
                            href="/"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Quickbook
                          </a>
                        </div>
                      </ListItem>
                    )}
                    {text === "Resources" && (
                      <ListItem button className="pl-4 flex-col">
                        <div className="flex flex-col gap-1 pl-[20px] col-span-1">
                          <a
                            href="/"
                            className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Glosary
                          </a>
                          <a
                            href=""
                            className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            eBooks
                          </a>{" "}
                          <a
                            href=""
                            className="text-[14px] hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            White Papers
                          </a>
                          <a
                            href="https://legittai.com/release-notes"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Release Notes
                          </a>
                          <a
                            href="https://legittai.com/videos"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Videos
                          </a>
                          <a
                            href="https://legittai.com/product-tour"
                            className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Product Tour
                          </a>
                        </div>

                        <div className="flex flex-col gap-1 pl-[20px] col-span-1">
                          <a
                            href="https://legittai.com/blog/"
                            className="text-[15px] border-b-[1px] py-1 mb-1 text-[#9b0242] border-b-[#9b0242]"
                          >
                            Blogs
                          </a>
                          <div className="text-[14px]  hover:text-[#9b0242] py-[5px] cursor-pointer">
                            Discover the latest trends, best practices and more
                            in the world of legal and legal tech.
                          </div>
                          <div className="flex justify-start items-center">
                            <div className="common-button">See All</div>
                          </div>
                        </div>
                      </ListItem>
                    )}
                    {text === "Company" && (
                      <ListItem button className="pl-4 flex-col">
                        <div className="flex flex-col gap-2">
                          {" "}
                          <a
                            href="https://legittai.com/about-us"
                            className="text-[14px] pl-[20px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            About Us
                          </a>
                          <a
                            href="https://legittai.com/privacy-policy"
                            className="text-[14px] pl-[20px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Privacy Policy
                          </a>
                          <a
                            href="https://legittai.com/demo"
                            className="text-[14px] pl-[20px]  hover:text-[#9b0242] py-[5px] cursor-pointer"
                          >
                            Schedule A Demo
                          </a>
                        </div>
                      </ListItem>
                    )}
                  </List>
                </Collapse>
              )}
              {/* {text !== "Pricing" && <Divider />} */}
            </div>
          ))}
          <Divider className="py-2" />
          <div className="flex flex-col sm:flex-row px-4 mt-2 gap-2">
            <a
              href="https://app.legittai.com/signup"
              className="button-outline text-center justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
            >
              Try Free
            </a>
            <a
              href="https://app.legittai.com/"
              className="button-outline text-center justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
            >
              Log in
            </a>
            <a
              href="https://legittai.com/demo"
              className="common-button text-center justify-between items-center w-full lg:flex lg:w-auto lg:order-1 "
            >
              Schedule A Demo
            </a>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
