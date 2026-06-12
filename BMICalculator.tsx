import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Calculator } from "lucide-react";

export function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (heightInMeters > 0 && weightInKg > 0) {
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(bmiValue.toFixed(1)));

      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setCategory("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
    }
  };

  const getBMIColor = () => {
    if (!bmi) return "";
    if (bmi < 18.5) return "text-blue-500";
    if (bmi >= 18.5 && bmi < 25) return "text-success";
    if (bmi >= 25 && bmi < 30) return "text-yellow-500";
    return "text-accent";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          BMI Calculator
        </CardTitle>
        <CardDescription>
          Calculate your Body Mass Index to understand your health status
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="170"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>

        <Button onClick={calculateBMI} className="w-full">
          Calculate BMI
        </Button>

        {bmi !== null && (
          <div className="mt-6 p-4 bg-secondary rounded-lg text-center">
            <p className="text-sm text-muted-foreground mb-2">Your BMI is</p>
            <p className={`text-4xl font-bold ${getBMIColor()}`}>{bmi}</p>
            <p className="text-lg mt-2">{category}</p>
          </div>
        )}

        <div className="text-xs text-muted-foreground mt-4">
          <p className="font-semibold mb-2">BMI Categories:</p>
          <ul className="space-y-1">
            <li>• Underweight: &lt; 18.5</li>
            <li>• Normal weight: 18.5 - 24.9</li>
            <li>• Overweight: 25 - 29.9</li>
            <li>• Obese: ≥ 30</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
