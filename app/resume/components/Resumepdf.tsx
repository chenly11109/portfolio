import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#fff",
    color: "rgb(0,0,0,0.7)",
  },

  section: {
    borderBottom: "0.5px",
    fontSize: 12,
    display: "flex",
    width: "100%",
  },

  sectionLeft: {
    width: "25%",
    borderRight: "0.5px",
  },

  sectionRight: {
    position: "absolute",
    left: "25%",
    top: 0,
    width: "70%",
    paddingLeft: "8px",
  },

  header: {
    fontSize: 14,
    textTransform: "uppercase",
    lineHeight: 1.2,
    height: "18px",
    backgroundColor: "rgb(0,0,0,0.7)",
    color: "white",
    width: "60%",
    textAlign: "center",
    position: "absolute",
    top: 0,
    right: 0,
  },

  subheader: {
    fontSize: 14,
    textTransform: "uppercase",
    lineHeight: 1.2,
    height: "18px",
    color: "black",
    width: "60%",
    textAlign: "right",
    position: "absolute",
    top: 0,
    right: 0,
    paddingRight: "4px",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "semibold",
    color: "black",
  },

  link: {
    textDecoration: "underline",
    textDecorationColor: "black",
    color: "black",
  },
});

const ResumePDF = () => (
  <Document title="Lingya_Resume" subject="Lingya_Resume">
    <Page size="A4" style={styles.page}>
      <View style={{ ...styles.section }}>
        <View
          style={{ ...styles.sectionLeft, padding: "8px", paddingTop: "24px" }}
        >
          <Text
            style={{
              textAlign: "right",
              fontSize: "22px",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            RESUME
          </Text>
          <Text
            style={{ textAlign: "right", fontSize: "14px", marginTop: "4px" }}
          >
            LINGYA CHEN
          </Text>
        </View>
        <View style={styles.sectionRight} />
      </View>

      <View style={styles.section}>
        <View>
          <View style={{ ...styles.sectionLeft, height: "30px" }}>
            <Text style={styles.header}>Personal</Text>
          </View>
          <View style={{ ...styles.sectionRight }}>
            <Text style={styles.link}>Email: chenlingya109@gmail.com</Text>
          </View>
        </View>

        <View>
          <View style={{ ...styles.sectionLeft, height: "150px" }}>
            <Text style={styles.subheader}>skills</Text>
          </View>
          <View style={{ ...styles.sectionRight }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                marginTop: "2px",
              }}
            >
              <Text
                style={{ width: "80px", color: "black", fontWeight: "medium" }}
              >
                Front-End
              </Text>
              <View>
                <Text>React, Typescript, Javascript, css, html</Text>
                <Text style={{ marginTop: "2px" }}>Three.js, WebGPU</Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                marginTop: "8px",
              }}
            >
              <Text
                style={{ width: "80px", color: "black", fontWeight: "medium" }}
              >
                Back-End
              </Text>
              <View>
                <Text>NextJS, (tRPC, prisma, MySQL)</Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                marginTop: "8px",
              }}
            >
              <Text
                style={{ width: "80px", color: "black", fontWeight: "medium" }}
              >
                AI Related
              </Text>
              <View>
                <Text>Python, Prompt Engineer, Stable Diffusion</Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                marginTop: "8px",
              }}
            >
              <Text
                style={{ width: "80px", color: "black", fontWeight: "medium" }}
              >
                Design
              </Text>
              <View>
                <Text>
                  Figma, Adobe(PS, AI, etc.), Rhino+Grasshopper, Lumion
                </Text>
                <Text>LARE (American Landscape Certificate)</Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                marginTop: "8px",
              }}
            >
              <Text
                style={{ width: "80px", color: "black", fontWeight: "medium" }}
              >
                Language
              </Text>
              <View>
                <Text>English/Chinese/Japanese</Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={{ ...styles.sectionLeft, height: "80px" }}>
            <Text style={styles.subheader}>education</Text>
          </View>
          <View style={{ ...styles.sectionRight }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                marginTop: "2px",
              }}
            >
              <View>
                <Text
                  style={{
                    width: "300px",
                    color: "black",
                    fontWeight: "medium",
                    fontSize: 12,
                  }}
                >
                  Harvard University
                </Text>
                <Text>Graduate School of Design, MLA | AP</Text>
              </View>

              <Text>2016-2018</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                marginTop: "8px",
              }}
            >
              <View>
                <Text
                  style={{
                    width: "300px",
                    fontSize: 12,
                    color: "black",
                    fontWeight: "medium",
                  }}
                >
                  Tsinghua University
                </Text>
                <Text
                  style={{
                    width: "300px",
                  }}
                >
                  Bachelor of Architecture
                </Text>
              </View>

              <Text>2011-2016</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={{ ...styles.sectionLeft, height: "40px" }}>
            <Text style={styles.subheader}>website</Text>
          </View>

          <Text
            style={{
              ...styles.sectionRight,
              ...styles.link,
            }}
          >
            https://chenly11109.github.io/portfolio/home
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <View style={{ color: "rgb(0,0,0,0.6)" }}>
          <View style={{ ...styles.sectionLeft, height: "420px" }}>
            <Text style={styles.header}>projects</Text>
          </View>
          <View style={{ ...styles.sectionRight, paddingTop: "4px" }}>
            <Text style={styles.sectionTitle}>Muse AI Toolbox</Text>
            <Text
              style={{
                paddingRight: "40px",
                paddingTop: "2px",
              }}
              wrap={false}
            >
              This is a web application designed for creating and editing
              digital content using AI technologies. It offers intuitive tools
              for image manipulation (Stable Diffusion) and text generation (LLM
              API).
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                paddingTop: "2px",
                paddingBottom: "8px",
              }}
            >
              - NextJS, Prompt Engineering
            </Text>

            <Text style={styles.sectionTitle}>
              Product Image Composer (Enterprise Version)
            </Text>
            <Text
              style={{ paddingRight: "40px", paddingTop: "2px" }}
              wrap={false}
            >
              An enterprise version featuring an enhanced points system based on
              user role management, offers multi-cloud deployment options,
              includes LoRa training, and supports customized ComfyUI workflows.
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                paddingTop: "2px",
                paddingBottom: "8px",
              }}
            >
              - NextJS, MySQL, Cloud Services, Stable Diffusion + ComfyUI
            </Text>

            <Text style={styles.sectionTitle}>
              Computer Graphics for Web Developers
            </Text>
            <Text
              style={{ paddingRight: "40px", paddingTop: "2px" }}
              wrap={false}
            >
              This system displays data on a globe, highlighting user and
              project hot-spots. Users can interact with the globe to view
              details of the projects.
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                paddingTop: "2px",
                paddingBottom: "8px",
              }}
            >
              - WebGPU, Computer Graphics
            </Text>

            <Text style={styles.sectionTitle}>Virtual Earth</Text>
            <Text style={{ paddingRight: "40px", paddingTop: "2px" }}>
              This project is a study-focused initiative designed for frontend
              developers without a C++ background who are interested in learning
              computer graphics.
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                paddingTop: "2px",
                paddingBottom: "8px",
              }}
            >
              - Three.js, React
            </Text>

            <Text style={styles.sectionTitle}>
              No-Code Development Platform
            </Text>
            <Text style={{ paddingRight: "40px" }}>
              An application that offers no-code platform for web3 application
              development. I am the front-end developer working on image/SVG
              editing, text editing, and event-triggering fetures.
            </Text>

            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                paddingTop: "2px",
                paddingBottom: "8px",
              }}
            >
              - React, CanvasAPI
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <View style={{ ...styles.sectionLeft, height: "100px" }}></View>
      </View>
      <View style={styles.section}>
        <View style={{ ...styles.sectionLeft, height: "20px" }}>
          <Text style={{ ...styles.header, width: "100px" }}>Experience</Text>
        </View>

        <View>
          <View style={{ ...styles.sectionLeft, height: "170px" }}>
            <Text
              style={{
                paddingTop: "8px",
                textAlign: "right",
                paddingRight: "8px",
              }}
            >
              &gt;&gt;&nbsp; 2022-2024
            </Text>
          </View>
          <View style={styles.sectionRight}>
            <Text style={styles.sectionTitle}>Tezign | Shanghai, China </Text>
            <Text
              style={{
                marginTop: "4px",
                color: "black",
                fontWeight: "semibold",
              }}
            >
              Full-Stack Developer in AI Team
            </Text>
            <Text
              style={{
                paddingRight: "40px",
                paddingTop: "8px",
              }}
            >
              Tezign is a leading AIGC tech unicorn in China, transforming
              content production, management, and analysis for top enterprises
              with cutting-edge generative AI.
            </Text>

            <Text style={{ marginTop: "8px" }}>
              - Led the development of a comprehensive system that managed the
              entire workflow from artwork generation to artwork management
              within an existing platform.
            </Text>
            <Text style={{ marginTop: "4px" }}>
              - Collaborated closely with AI engineers to ensure seamless
              front-end integration with complex backend systems.
            </Text>
          </View>
        </View>

        <View>
          <View style={{ ...styles.sectionLeft, height: "190px" }}>
            <Text
              style={{
                paddingTop: "8px",
                textAlign: "right",
                paddingRight: "8px",
              }}
            >
              &gt;&gt;&nbsp; 2021-2022
            </Text>
          </View>
          <View style={styles.sectionRight}>
            <Text style={styles.sectionTitle}>
              Yunlian (CloudChain) Technology | Beijing, China
            </Text>
            <Text
              style={{
                marginTop: "4px",
                color: "black",
                fontWeight: "semibold",
              }}
            >
              Frontend Developer
            </Text>
            <Text
              style={{
                paddingRight: "40px",
                paddingTop: "8px",
              }}
            >
              Yunlian is a Web3 startup that has successfully secured angel
              round funding. The company’s primary project is a no-code
              development platform aimed at attracting developers who are
              interested in Web3 but lack coding experience.
            </Text>

            <Text style={{ marginTop: "8px" }} wrap={false}>
              - Developed visually compelling and expressive interfaces using
              Three.js, leveraging strong aesthetics to craft engaging
              narratives for investor presentations.
            </Text>
            <Text style={{ marginTop: "4px" }} wrap={false}>
              - Played a key role as a front-end developer in the creation of a
              no-code platform, enabling users to build and deploy Web3
              applications with ease.
            </Text>
          </View>
        </View>

        <View>
          <View style={{ ...styles.sectionLeft, height: "180px" }}>
            <Text
              style={{
                paddingTop: "8px",
                textAlign: "right",
                paddingRight: "8px",
              }}
            >
              &gt;&gt;&nbsp; 2019-2021
            </Text>
          </View>
          <View style={styles.sectionRight}>
            <View>
              <Text style={styles.sectionTitle}>OJB | San Diego</Text>
              <Text
                style={{
                  marginTop: "4px",
                  color: "black",
                  fontWeight: "semibold",
                }}
              >
                Landscape Architect
              </Text>
              <Text
                style={{
                  paddingRight: "40px",
                  paddingTop: "8px",
                }}
              >
                OJB is a collective landscape and urban planning practice
                inspired to create beauty and find unexpected moments in the
                natural world.
              </Text>

              <View>
                <Text
                  style={{
                    marginTop: "8px",
                    color: "black",
                    fontWeight: "medium",
                  }}
                  wrap={false}
                >
                  -Willow Village(Facebook Campus), CA
                </Text>
                <Text
                  style={{
                    ...styles.link,
                    marginLeft: "4px",
                    color: "rgba(0,0,0,0.7)",
                  }}
                >
                  https://willowvillage.com/
                </Text>
                <Text style={{ marginLeft: "4px" }} wrap={false}>
                  Main designer in the Schematic Design & Design Devlopment
                  phase
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    marginTop: "8px",
                    color: "black",
                    fontWeight: "medium",
                  }}
                  wrap={false}
                >
                  -Westside Pavilion (Google Campus) , LA, CA
                </Text>

                <Text style={{ marginLeft: "4px" }} wrap={false}>
                  Designer in the Design Devlopment phase
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;

export function ResumeLink() {
  return (
    <PDFDownloadLink
      document={<ResumePDF />}
      fileName="LingyaChenResume.pdf"
      className=""
    >
      {({ blob, url, loading, error }) =>
        loading ? "Loading Resume.." : "Download Resume"
      }
    </PDFDownloadLink>
  );
}
