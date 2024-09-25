# Kenko Health and Fitness App

Welcome to Kenko, your personal health and fitness assistant! Kenko is a comprehensive health and fitness application that includes features such as a health tracker, meal planner, AI doctor, and exercise guide.

## Table of Contents
- [Manual And Demo](#manual-and-demo)
- [AI Health Bot](#ai-health-bot)
- [Meal Planner](#meal-planner)
- [User Authentication](#user-authentication)
- [Exercise Guide](#exercise-guide)
- [Heath tracker](#Heath-tracker)

## Manual And Demo
To run the Kenko Health and Fitness App, use the following command:

```bash
npm start
```

add your api keys for edamam and openai

demo video : - https://youtu.be/8AIk8DSsYhU


## AI Health Bot

In the `ChatBot.html` file, we've implemented an AI Health Bot powered by OpenAI's GPT-3.5. Users can interact with the bot by entering prompts related to health, and the bot will provide informative responses. The chat interface is designed to make the interaction user-friendly.

## Meal Planner

The `MealPlanner.html` file includes a meal planning feature that allows users to generate personalized meal plans based on their preferences. The meal plan is created using the Edamam Nutrition API, incorporating factors such as the number of meals, diet preference, health specifications, and desired caloric intake.

## User Authentication

The `index.html` file provides a simple login interface. Users can enter their username and password, and upon successful authentication, they are redirected to the dashboard (`dash.html`). This basic authentication is for demonstration purposes; you should replace it with your actual authentication logic.

## Exercise Guide

In the `home.html` file, we've included an exercise guide with various workouts. Each workout is presented with a description and an option to read more. Users can find exercises ranging from cardio to strength training, enhancing their fitness journey.

## Heath tracker

The `dash.html` file allows users to seamlessly to track there personal health growth.
