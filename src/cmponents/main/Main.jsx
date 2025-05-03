import  './Main.css'
import b from './b.png'
import a from './a.png'


function Main() {
  return (
    <main>
        <section className="ikkinchi">
            <div className="container">
                <p>Food app</p>
                <h1>Why stay hungry when <br /> you can order form Bella Onojie</h1>
                <h2>Download the bella onoje’s food app now on</h2>
                <div className="btn-ota">
                <button class="btn">Playstore</button>
                <button class="btn">App store</button>
                </div>
            </div>
        </section>
        <section className="con">
        <h1>How the app works</h1>
        </section>
        <div className="container">
            <section className="r4">
                <img src={a} alt="" />
                <div className="text">
                <h3>Create an account</h3>
            <h2>Create/login to an existing <br />
                account to get started</h2>
                <h4>An account is created with your email <br />
                    and a desired password</h4>

                </div>
            </section>
            <section className="r4">
                <div className="text">
                <h3>Create an account</h3>
            <h2>Create/login to an existing <br />
                account to get started</h2>
                <h4>An account is created with your email <br />
                    and a desired password</h4>
                </div>
                <img src={a} alt="" />
            </section>
            <section className="r4">
                <img src={a} alt="" />
                <div className="text">
                <h3>Create an account</h3>
            <h2>Create/login to an existing <br />
                account to get started</h2>
                <h4>An account is created with your email <br />
                    and a desired password</h4>

                </div>
            </section>
        </div>
    </main>
  )
}

export default Main
