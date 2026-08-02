import {
  SiGithub,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiPython,
  SiStreamlit,
  SiDotnet,
} from "react-icons/si";
import { Mail } from "lucide-react";
import { IconType } from "react-icons";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { LucideProps } from "lucide-react";

export type TechIcon =
  | IconType
  | ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;

export interface TechStack {
  name: string;
  icon: TechIcon;
  color: string;
}

export interface GithubLink {
  label: string;
  url: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  /**
   * Short SEO-only description — used for <meta name="description">,
   * Open Graph, and Twitter cards. Keep this between 120–160 characters.
   * The longer `description` field above is still used for on-page display.
   */
  metaDescription: string;
  tech: TechStack[];
  featured: boolean;
  hasLiveDemo: boolean;
  liveDemoUrl: string;
  githubLinks: GithubLink[];
  codeSnippet: string;
  snippetLang: string;
  extendedContent: {
    problem: string;
    solution: string;
    features: string[];
  };
}

export const PROJECTS: ProjectData[] = [
  {
    slug: "club-laminate",
    title: "Club Laminate",
    description:
      "A full-stack MERN e-commerce platform for a plywood products supplier - featuring a customer storefront, REST API, and a separate admin dashboard for complete product catalog management.",
    metaDescription:
      "Full-stack MERN e-commerce platform for a plywood supplier — customer storefront, REST API, and admin dashboard for catalog management.",
    tech: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MailJS", icon: Mail, color: "#F4B400" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
    featured: true,
    hasLiveDemo: true,
    liveDemoUrl: "https://club-laminate-e-comm-client.vercel.app",
    githubLinks: [
      { label: "", url: "https://github.com/vrajkanani/Club-Laminate-EComm" },
    ],
    codeSnippet: `const clubLaminate = {
  stack: ["MongoDB", "Express", "React", "Node.js"],
  features: ["Interactive UI", "MailJS Integration"],
  status: "Deployed successfully",
  launch: () => console.log("Welcome to Club Laminate!")
};

clubLaminate.launch();`,
    snippetLang: "javascript",
    extendedContent: {
      problem:
        "Club Laminate, a plywood and laminate products supplier, was running their entire business offline. Potential buyers had no way to browse the product range, compare finishes or specifications, or make inquiries without picking up the phone. The business was losing leads to competitors with an online presence, and the team was spending hours answering repetitive product questions that customers could have self-served - if a catalog existed.",
      solution:
        "Built a complete dual-application platform using the MERN stack, deployed as two independent Vercel apps. The customer-facing storefront gives buyers a fast, filterable product catalog to browse the full laminate and plywood range without any assistance. A separate admin dashboard gives the Club Laminate team full control to add, edit, and remove products without ever touching the codebase. MailJS powers a contact form so customers can reach the business directly from the product pages, replacing the phone-only inquiry process and cutting down manual overhead significantly.",
      features: [
        "Dual-application architecture - customer storefront and admin dashboard deployed as independent apps on Vercel, each with its own scope and access control.",
        "Dynamic product catalog with filtering and search, allowing buyers to browse by product type, finish, and specification without assistance.",
        "Admin CRUD dashboard - the Club Laminate team can add, edit, and delete products with image support, no developer required after handoff.",
        "MailJS-powered inquiry form with automated email delivery directly to the business inbox, replacing a phone-only contact process.",
        "Node.js + Express REST API with clearly separated routes for products, admin operations, and contact - connected to MongoDB Atlas for cloud-hosted persistence.",
        "Responsive React frontend built for both desktop browsing and mobile product discovery, with smooth navigation between categories.",
      ],
    },
  },
  {
    slug: "iris-flower-prediction",
    title: "Iris Flower Prediction",
    description:
      "An end-to-end ML deployment project - a scikit-learn classifier trained on the Iris dataset, serialized as a model file, and served as a live interactive web app on Streamlit Cloud.",
    metaDescription:
      "End-to-end ML deployment: a scikit-learn Iris classifier, serialized as a model file and served as a live interactive app on Streamlit Cloud.",
    tech: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
    ],
    featured: false,
    hasLiveDemo: true,
    liveDemoUrl: "https://iris-deploy.streamlit.app",
    githubLinks: [
      { label: "", url: "https://github.com/vrajkanani/Iris_Deployment" },
    ],
    codeSnippet: `import streamlit as st
from sklearn import datasets

# Load Iris dataset
iris = datasets.load_iris()
X = iris.data
y = iris.target

st.write("Iris Flower Prediction Model")`,
    snippetLang: "python",
    extendedContent: {
      problem:
        "Most machine learning tutorials stop at model training. You run the code, see the accuracy score, and that's it - the model lives only in a notebook that nobody else can use. The real skill gap in ML isn't training a model; it's knowing how to serialize it, build a usable interface around it, configure a reproducible environment, and ship it as a live application that anyone can access from a browser without installing Python.",
      solution:
        "Built the complete pipeline from training to deployment in a single project. A scikit-learn classifier was trained on the classic Iris dataset to predict flower species - Setosa, Versicolor, or Virginica - based on four botanical measurements. The trained model was serialized using Python's pickle format and saved as a .sav file, fully decoupling the training phase from the serving phase. A Streamlit app then loads that saved model at startup and wraps it in an interactive dashboard with slider inputs for each measurement, returning an instant species prediction. A devcontainer configuration ensures the environment is reproducible across any machine, and the whole thing is deployed to Streamlit Cloud - public URL, no server management, no infrastructure overhead.",
      features: [
        "Complete end-to-end ML pipeline: data preparation → model training → serialization → live deployment, all in one project.",
        "Model persistence with pickle - the trained classifier is saved as savedmodel.sav and loaded once at app startup, giving instant predictions with no re-training overhead.",
        "Interactive Streamlit dashboard with four slider inputs: sepal length, sepal width, petal length, and petal width - covers the full measurement range of the dataset.",
        "Real-time species classification across all three Iris classes: Setosa, Versicolor, and Virginica, with the prediction updating immediately on slider change.",
        "DevContainer configuration for a fully reproducible development environment - the same Python version and dependencies on any machine or GitHub Codespace.",
        "Deployed to Streamlit Cloud with a public live URL - no backend server, no Docker setup, no infrastructure to maintain.",
      ],
    },
  },
  {
    slug: "task-management-system",
    title: "Task Management System",
    description:
      "A two-repo task management system - an ASP.NET Core REST API with subtasks, priority filtering, history tracking and role-based access, consumed by a separate ASP.NET MVC frontend.",
    metaDescription:
      "Two-repo task management system: an ASP.NET Core REST API with subtasks, priority filtering, and role-based access, consumed by an MVC frontend.",
    tech: [
      { name: "ASP.NET", icon: SiDotnet, color: "#512BD4" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
    featured: false,
    hasLiveDemo: false,
    liveDemoUrl: "",
    githubLinks: [
      {
        url: "https://github.com/vrajkanani/Task_Management",
        label: "Frontend (MVC)",
      },
      { url: "https://github.com/vrajkanani/TODOAPI", label: "Backend (API)" },
    ],
    codeSnippet: `public class TaskController : Controller
{
    private readonly AppDbContext _context;

    public async Task<IActionResult> Index()
    {
        return View(await _context.Tasks.ToListAsync());
    }
}`,
    snippetLang: "csharp",
    extendedContent: {
      problem:
        "Simple to-do apps handle single-level tasks fine, but real task management needs more: tasks that break down into subtasks, a way to prioritize what matters, a history of what changed and when, and different permission levels for regular users versus admins. Most student CRUD projects stop at basic create-read-update-delete and never touch these real-world requirements - or the architectural discipline of keeping the API and the UI as two independently deployable services.",
      solution:
        "Split the system into two separate repositories with a clean API boundary between them. The backend is a RESTful API built with ASP.NET Core, structured into distinct Controllers, Services, Models, and Validations layers, handling subtasks, priority-based filtering, task history tracking, and role-based access control for users and admins. The frontend is a separate ASP.NET MVC application with its own Controllers, Views, and Validations, consuming the API purely over HTTP - the two projects share no code and could be deployed, scaled, or replaced independently. This mirrors how task management tools are actually built in production: a decoupled API a mobile app or a different frontend could just as easily plug into.",
      features: [
        "Subtask support - tasks can be broken into smaller sub-items rather than being tracked as flat, single-level to-dos.",
        "Priority-based filtering, letting users surface the tasks that matter most instead of scrolling through an unsorted list.",
        "Task history tracking, so changes to a task over time are recorded rather than silently overwritten.",
        "Role-based access control distinguishing regular users from admins, each with different permissions.",
        "Layered ASP.NET Core API architecture with dedicated Controllers, Services, Models, and Validations for clear separation of concerns.",
        "Two independently deployable repositories - backend API and MVC frontend - connected only through HTTP, not shared code.",
      ],
    },
  },
];
