import * as React from "react"
import { Helmet } from "react-helmet"
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>NFT Info Page</title>
        <meta name="description" content="Eine Webseite f??r den Kunst Unterricht, ??ber NFTs" />
      </Helmet>
      <section id={stylesheet.hero}>
        <BackgroundImage
          className={stylesheet.background}
          fluid={imageData}
        >
          <div className={stylesheet.heroContent}>
            <h1>NFT - Non-Fungible Token</h1>
          </div>
        </BackgroundImage>
      </section>
      <div className={stylesheet.wrapper}>
        <section id={stylesheet.what}>
          <h2 className={stylesheet.h2Green}> Was sind NFTs?</h2>
          <p className={stylesheet.pNormal}>Ein NFT ist ein Verm??genswert, der mithilfe der Blockchain-Technologie verifiziert wird, bei der ein Netzwerk von Computern Transaktionen aufzeichnet und K??ufern einen Beweis f??r die Echtheit und das Eigentum liefert. <br /> Der aktuelle Boom gilt vor allem f??r digitale Assets, darunter Bilder, GIFs, Songs oder Videos. Vor allem aber machen NFTs digitale Kunstwerke einzigartig und damit verkaufbar. Jetzt nutzen K??nstler, Musiker, Influencer und Sportfranchises NFTs, um digitale G??ter zu monetarisieren, die bisher billig oder kostenlos waren. Die Technologie reagiert auch auf das Bed??rfnis der Kunstwelt nach Authentifizierung in einer zunehmend digitalen Welt, indem die Blockchain eine digitale Datei dauerhaft mit ihrem Sch??pfer verkn??pft.</p>
        </section>
        <section id={stylesheet.art}>
          <h2 className={stylesheet.h2Green}>Was hat das mit Kunst zutun?</h2>
          <p className={stylesheet.pNormal}>
            NFTs bieten K??nstlern eine innovative Art, ihre Werke zu verkaufen ??? dieser digitale Vertriebsweg ist vor allem in Zeiten der Pandemie reizvoll. Durch ihren dezentralen Aufbau k??nnten Vermittlungsstellen wie  Auktionsh??user, wo man teilweise bis zu 25 Prozent Geb??hren zahlen muss, umgangen werden. Mit Nfts haben auch unbekanntere K??nstler die Chance, ihre Werke zu verkaufen und damit Gewinne zu erzielen. Zus??tzlich lassen sich NFTs auch so programmieren, dass der K??nstler bei jedem Weiterverkauf seines Werkes eine Provision erh??lt. <br />
            Bekannt Marktpl??tze, wo man innerhalb weniger Minuten seine Kunstwerke anbieten kann, sind <Link className={stylesheet.link} to="https://rarible.com/">Rarible</Link>, <Link className={stylesheet.link} to="https://opensea.io/">OpenSea</Link> und <Link className={stylesheet.link} to="https://www.airnfts.com/">AirNFTs</Link>
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
                  <h3>Hashmasks #6054</h3>
                  <p>                    Hashmasks sind virtuelle Kunstwerke, die von einem weltweit verteilten Team von 70 K??nstlern unter der Leitung von Suum Cuique Labs geschaffen werden</p>
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
                  <h3>CryptoPunk #7804</h3>
                  <p>Die CryptoPunks sind eine Sammlung von 24x24 Pixel-Art-Bildern im 8-Bit-Stil von Au??enseitern und Exzentrikern. Es gibt genau 10.000 von ihnen.</p>
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
                  <h3>Bored Ape Yacht Club</h3>
                  <p>Es ist eine Sammlung von 10.000 einzigartigen Bored Ape NFTs - einzigartige digitale Sammlerst??cke, die auf der Ethereum-Blockchain leben. Das Kunstwerk dient au??erdem als Mitgliedskarte f??r den Yacht Club.</p>
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
                  <h3>GOAT</h3>
                  <p>Diese Zusammenarbeit zwischen Beeple und Peter France wurde mit Cinema 4D, Bellus3D f??r die K??pfe, Octane Render und Adobe Photoshop erstellt.</p>
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
                  <h3>EVERYDAYS: THE FIRST 5000 DAYS</h3>
                  <p>Es ist ein digitales Kunstwerk von Mike Winkelmann, professionell bekannt als Beeple. Die Arbeit ist eine Collage aus 5000 digitalen Bildern, die Winkelmann f??r seine Serie "Everydays" erstellt hat.</p>
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
                  <h3>EthBoy</h3>
                  <p> Vitalik Buterin wird in diesem Kunstwerk ??hnlich wie Picassos Sohn Paulo, der als Harlekin gekleidet ist, dargestellt.</p>
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
                  <h3>Right Place & Right Time</h3>
                  <p>Jeden Tag wird eine neue Komposition f??r den Besitzer autonom generiert, indem ein Datenfeed der letzten 24 Stunden des Bitcoin-Kurses verwendet wird. Der Preis jeder Stunde steuert programmatisch die Rotation, Skalierung und Position einer korrelierenden Schicht. </p>
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
                  <h3>art#boi</h3>
                  <p>Dieses Kunstwerk wurde k??rzlich f??r 310.957,56 Euro verkauft und wurde von iamlirona
 erstellt</p>
                </div>
                <button onClick={() => window.open("https://opensea.io/assets/0x60f80121c31a0d46b5279700f9df786054aa5ee5/230611")}>Mehr Infos</button>
              </div>


            </BackgroundImage>






          </div>


        </section>

        <section id={stylesheet.footer}>
          <Link id={stylesheet.website} to="https://www.lennartkrellenberg.com/">Created by Lennart Krellenberg</Link>
        </section>






      </div>
    </div >


  )

}



export default IndexPage
