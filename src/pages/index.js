import * as React from "react"
import * as stylesheet from "../style/global.module.scss"
import { graphql, useStaticQuery } from 'gatsby'
import { Link } from "gatsby"
import BackgroundImage from 'gatsby-background-image'



// markup
const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
    query MyQuery {
      image: file(relativePath: {eq: "nfthero.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      
      image1: file(relativePath: {eq: "hashmask.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      image2: file(relativePath: {eq: "cryptopunk.png"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      image3: file(relativePath: {eq: "bayc.png"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }


      image4: file(relativePath: {eq: "beeple.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      
      image5: file(relativePath: {eq: "ethboy.png"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      image6: file(relativePath: {eq: "bitcoin.png"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      image7: file(relativePath: {eq: "artboi.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    
      

      
      
    `
  )
  const imageData = data.image.childImageSharp.fluid;
  const hashmask = data.image1.childImageSharp.fluid;
  const cryptopunk = data.image2.childImageSharp.fluid;
  const bayc = data.image3.childImageSharp.fluid;
  const beeple = data.image4.childImageSharp.fluid;
  const ethboy = data.image5.childImageSharp.fluid;
  const bitcoin = data.image6.childImageSharp.fluid;
  const artboi = data.image7.childImageSharp.fluid;


  return (
    <div>
      <section id={stylesheet.hero}>
        <BackgroundImage
          className={stylesheet.background}
          fluid={imageData}
        >
          <div className={stylesheet.heroContent}>
            <h1>Test</h1>
          </div>
        </BackgroundImage>
      </section>
      <div className={stylesheet.wrapper}>
        <section id={stylesheet.what}>
          <h2 className={stylesheet.h2Green}> Was sind NFTs?</h2>
          <p className={stylesheet.pNormal}>Ein NFT ist ein Vermögenswert, der mithilfe der Blockchain-Technologie verifiziert wird, bei der ein Netzwerk von Computern Transaktionen aufzeichnet und Käufern einen Beweis für die Echtheit und das Eigentum liefert. <br /> Der aktuelle Boom gilt vor allem für digitale Assets, darunter Bilder, GIFs, Songs oder Videos. Vor allem aber machen NFTs digitale Kunstwerke einzigartig und damit verkaufbar. Jetzt nutzen Künstler, Musiker, Influencer und Sportfranchises NFTs, um digitale Güter zu monetarisieren, die bisher billig oder kostenlos waren. Die Technologie reagiert auch auf das Bedürfnis der Kunstwelt nach Authentifizierung und Provenienz in einer zunehmend digitalen Welt, indem sie eine digitale Datei dauerhaft mit ihrem Schöpfer verknüpft.</p>
        </section>
        <section id={stylesheet.art}>
          <h2 className={stylesheet.h2Green}>Was hat das mit Kunst zutun?</h2>
          <p className={stylesheet.pNormal}>
            NFTs bieten Künstlern eine innovative Art, ihre Werke zu verkaufen – dieser digitale Vertriebsweg ist vor allem in Zeiten der Pandemie reizvoll. Durch ihren dezentralen Aufbau könnten Vermittlungsstellen wie  Auktionshäuser, wo man teilweise bis zu 25 Prozent Gebühren zahlen muss, umgangen werden. Mit Nfts haben auch unbekanntere Künstler die Chance, ihre Werke zu verkaufen und damit Gewinne zu erzielen. Zusätzlich lassen sich NFTs auch so programmieren, dass der Künstler bei jedem Weiterverkauf seines Werkes eine Provision erhält. <br />
            Bekannt Marktplätze, wo man innerhalb weniger Minuten seine Kunstwerke anbieten kann, sind <Link className={stylesheet.link} to="https://rarible.com/">Rarible</Link>, <Link className={stylesheet.link} to="https://opensea.io/">OpenSea</Link> und <Link className={stylesheet.link} to="https://www.airnfts.com/">AirNFTs</Link>
          </p>

        </section>

        <section id="Rekorde">

          <div className={stylesheet.records}>
            <div onClick={() => window.open("https://onlineonly.christies.com/s/beeple-first-5000-days/beeple-b-1981-1/112924?ldp_breadcrumb=back")} className={stylesheet.record}>
              <h3>$69 Millionen</h3>
              <p>teuerster NFT</p>
            </div>

            <div onClick={() => window.open("https://foundation.app/pak/-6544")} className={stylesheet.record}>
              <h3>$1.559.492,28</h3>
              <p>teuerstes GIF</p>
            </div>


            <div onClick={() => window.open("https://superrare.co/artwork-v2/mars-house-21383")} className={stylesheet.record}>
              <h3>$512.000</h3>
              <p>erstes 3D Kunstwerk</p>
            </div>

            <div onClick={() => window.open("https://nbatopshot.com/moment/bigdog_brothers+2499f572-8280-4057-ac27-5603971de95d")} className={stylesheet.record}>
              <h3>$210.000</h3>
              <p>teuerstes Collectable</p>
            </div>


          </div>
        </section>

        <section id="Beispiele">
          <h2 className={stylesheet.h2Green}>Beispiele</h2>

          <div className={stylesheet.examples}>
            <BackgroundImage
              className={stylesheet.example}
              fluid={hashmask}
            >
              <div className={stylesheet.exampleOverlay}>
                <div>
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                </div>
                <button onClick={() => window.open("https://opensea.io/assets/0xc2c747e0f7004f9e8817db2ca4997657a7746928/6054")}>Mehr Infos</button>
              </div>


            </BackgroundImage>




            <BackgroundImage
              className={stylesheet.example}
              fluid={cryptopunk}
            >
              <div className={stylesheet.exampleOverlay}>
                <div>
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                </div>
                <button onClick={() => window.open("https://opensea.io/assets/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/7804")}>Mehr Infos</button>
              </div>


            </BackgroundImage>
            <BackgroundImage
              className={stylesheet.example}
              fluid={bayc}
            >
              <div className={stylesheet.exampleOverlay}>
                <div>
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                </div>
                <button onClick={() => { window.open("https://opensea.io/assets/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/8746") }}>Mehr Infos</button>
              </div>


            </BackgroundImage>
            <BackgroundImage
              className={stylesheet.example}
              fluid={beeple}
            >
              <div className={stylesheet.exampleOverlay}>
                <div>
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                </div>
                <button onClick={() => { window.open("https://opensea.io/assets/0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/50472") }}>Mehr Infos</button>
              </div>
            </BackgroundImage>
            <BackgroundImage
              className={stylesheet.example}
              fluid={imageData}
            >
              <div className={stylesheet.exampleOverlay}>
                <div>
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                </div>
                <button onClick={() => window.open("https://onlineonly.christies.com/s/beeple-first-5000-days/beeple-b-1981-1/112924?ldp_breadcrumb=back")}>Mehr Infos</button>
              </div>


            </BackgroundImage>
            <BackgroundImage
              className={stylesheet.example}
              fluid={ethboy}
            >
              <div className={stylesheet.exampleOverlay}>
                <div>
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                </div>
                <button onClick={() => window.open("https://opensea.io/assets/0xb6dae651468e9593e4581705a09c10a76ac1e0c8/807")}>Mehr Infos</button>
              </div>


            </BackgroundImage>
            <BackgroundImage
              className={stylesheet.example}
              fluid={bitcoin}
            >
              <div className={stylesheet.exampleOverlay}>
                <div>
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                </div>
                <button onClick={() => window.open("https://opensea.io/assets/0xb6dae651468e9593e4581705a09c10a76ac1e0c8/245")}>Mehr Infos</button>
              </div>


            </BackgroundImage>
            <BackgroundImage
              className={stylesheet.example}
              fluid={artboi}
            >
              <div className={stylesheet.exampleOverlay}>
                <div>
                  <h3>Lorem Ipsum</h3>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                </div>
                <button onClick={() => window.open("https://opensea.io/assets/0x60f80121c31a0d46b5279700f9df786054aa5ee5/230611")}>Mehr Infos</button>
              </div>


            </BackgroundImage>






          </div>


        </section>






      </div>
    </div >


  )

}



export default IndexPage
