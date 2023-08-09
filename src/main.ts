import express, { Request, Response, NextFunction } from "express";
import CalculateSubjectsGradeAverage from "./CalculateSubjectsGradeAverage";

const app = express();
app.use(express.json())

const errorHandler = (error: Error, request: Request, response: Response, next: NextFunction) => {
  response.status(400).send(error.message)
}

app.post("/calculate-grade-average", async function(request: Request, response: Response, next: NextFunction) {  
  try {    
    const calculateSubjectsGradeAverage = new CalculateSubjectsGradeAverage();  
    const gradesAverage = await calculateSubjectsGradeAverage.execute(request.body); 
    response.json(gradesAverage);
  } catch (error) { 
    next(error);
  }  
})

app.use(errorHandler)

app.listen(3000);