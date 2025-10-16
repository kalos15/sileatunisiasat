import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="bg-card rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Campchess Privacy Policy
          </h1>

          <div className="prose prose-slate max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              333333xxxx
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
