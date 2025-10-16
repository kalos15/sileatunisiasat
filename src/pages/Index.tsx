import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
              <span className="text-4xl">💎</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">
            🚀 www.VirtualBot.app
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Silea by Khalil Messaoudi
          </p>
          <p className="text-sm text-muted-foreground">
            App Developer | UI/UX Designer | Instagram Influencer | Domain Investor
          </p>
        </header>

        {/* Main Content */}
        <main className="max-w-3xl w-full space-y-8">
          {/* Intro Section */}
          <section className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">Hello and Welcome!</h2>
            <p className="text-muted-foreground mb-3">
              I'm Khalil Messaoudi, a passionate app developer and designer with a love for creating innovative digital experiences. I also share my journey, tutorials, and tech insights on YouTube and Instagram.
            </p>
            <p className="text-muted-foreground">
              This website is currently under development, but soon you'll be able to explore my projects, apps, and full portfolio. My focus is on building intuitive apps, designing clean interfaces, and delivering creative solutions for users worldwide.
            </p>
          </section>

          {/* Apps Section with Campchess */}
          <section className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Upcoming Apps</h2>
            <p className="text-muted-foreground mb-4">
              <strong>CampChess</strong> – An engaging chess app designed to challenge your mind and entertain at the same time.
            </p>
            
            {/* Privacy Policy Button */}
            <Button
              onClick={() => navigate("/privacy-policy")}
              size="lg"
              className="gap-2 w-full sm:w-auto"
            >
              <Shield className="h-5 w-5" />
              Campchess Privacy Policy
            </Button>

            <p className="text-muted-foreground mt-6">
              More exciting projects coming soon…
            </p>
          </section>

          {/* Why Work With Me */}
          <section className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Work With Me</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <strong className="text-foreground">App Development:</strong> Android & cross-platform apps built with efficiency and performance in mind.
              </li>
              <li>
                <strong className="text-foreground">UI/UX Design:</strong> Modern, user-friendly, and visually appealing designs.
              </li>
              <li>
                <strong className="text-foreground">Creative Content:</strong> Tutorials, tech reviews, and app insights shared on YouTube and Instagram.
              </li>
            </ul>
          </section>

          {/* Contact */}
          <section className="bg-card rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-2">
              Email: <a href="mailto:sileatunisiasat@gmail.com" className="text-primary hover:underline">sileatunisiasat@gmail.com</a>
            </p>
            <p className="text-muted-foreground">
              Follow me on YouTube for updates and tutorials.
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <div className="flex gap-6 justify-center mb-4">
            <a href="https://www.instagram.com/_kalos.x" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Instagram
            </a>
            <a href="https://x.com/kalos_15" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              X
            </a>
            <a href="mailto:sileatunisiasat@gmail.com" className="text-primary hover:underline">
              Contact
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; 2025 Khalil Messaoudi. Design inspired by HTML5 UP.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
