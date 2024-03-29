interface MainCard {
  title: string;
  content: string;
}

interface SubCard {
  id: number;
  title: string;
  content: string;
}

interface FooterMainCard {
  title: string;
  content: string;
}

interface FooterSubCard {
  id: number;
  title: string;
  content: string;
}

interface FooterContent {
  maincard: FooterMainCard;
  subcard: FooterSubCard[];
}

interface CardContent {
  maincard: MainCard;
  subcard: SubCard[];
  footercontent: FooterContent;
}

interface HeaderContent {
  header: {
    title: string;
    content: string;
  };
  contentcal: {
    title: string;
    optionA: string;
    optionB: string;
  };
  cardcontent: CardContent;
}

// Define the HeaderContent object
export const HeaderContent: HeaderContent = {
  header: {
    title: "Body Mass Index Calculator",
    content:
      "Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.",
  },
  contentcal: {
    title: "Enter your details below",
    optionA: "metric",
    optionB: "imperial",
  },
  cardcontent: {
    maincard: {
      title: "What your BMI result means",
      content:
        "A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.",
    },
    subcard: [
      {
        id: 0,
        title: "Healthy eating",
        content:
          "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
      },
      {
        id: 1,
        title: "Regular exercise",
        content:
          "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
      },
      {
        id: 2,
        title: "Adequate sleep",
        content:
          "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
      },
    ],
    footercontent: {
      maincard: {
        title: "Limitations of BMI",
        content:
          "Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.",
      },
      subcard: [
        {
          id: 0,
          title: "Gender",
          content:
            "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
        },
        {
          id: 1,
          title: "Age",
          content:
            "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
        },
        {
          id: 2,
          title: "Muscle",
          content:
            "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
        },
        {
          id: 3,
          title: "Pregnancy",
          content:
            "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
        },
        {
          id: 4,
          title: "Race",
          content:
            "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
        },
      ],
    },
  },
};
