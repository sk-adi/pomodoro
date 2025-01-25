import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-16 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">About Me</h1>

        <p className="text-lg leading-relaxed">
          Hi, I’m Aditya! I’m passionate about building tools that enhance productivity and bring value to users. The Pomodoro Project is a labor of love, designed with simplicity and effectiveness in mind. Feel free to share your thoughts and feedback!
        </p>

        <p className="text-lg leading-relaxed">
          Want to contribute or check out the code? Visit my GitHub repository:
          <a href="https://github.com/sk-adi" className="text-blue-400 hover:underline"> Pomodoro Project on GitHub</a>
        </p>

        <section>
          <h2 className="text-2xl font-semibold">About the Pomodoro Project</h2>
          <p className="text-lg leading-relaxed">
            The Pomodoro Project is a simple web tool to help you manage time using the Pomodoro Technique. With an intuitive timer and a serene design, it ensures productivity and focus. Customize your sessions and stay in control of your workflow.
          </p>
        </section>

        <footer className="text-center text-sm text-gray-500">
          Thank you for exploring the Pomodoro Project. Stay tuned for updates and new features as the project evolves!
        </footer>
      </div>
    </div>
  );
}

export default About;
