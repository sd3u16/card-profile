import './Card.css'

export default function Card(){
    return(
        <div class="container">
            <div class="inner">
                <header class="header">
                   
                    
                    
                </header>
                
                <main>
                
                    <h2 class="header_h2">Laura Smith</h2>
                    <p class="header_p">
                        Frontend Developer
                    </p>
                    <p class="header_web">
                        laurasmith.website
                    </p>
                    
                    <div class="btns">
                        <button class="btn btn-email">
                            <i class="fa-solid fa-envelope"></i>
                            <p>Email</p>
                        </button>
                        
                        <button class=" btn btn-linkedin">
                             <i class="fa-brands fa-linkedin"></i>
                             <p>Linkedln</p>
                        </button>
                    </div>
                    
                    <h4 class="main_h4">About</h4>
                    <p class="main_p">
                        I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                    </p>
                    
                    
                    <h4 class="main_h4">Interests</h4>
                    <p class="main_p">
                        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                    </p>
                    
                    
                
                
                </main>
                
                <footer>
                    <i class="fa-brands fa-square-twitter"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-github"></i>
                </footer>
            </div>
        </div>
    )
}