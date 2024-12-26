import Lottie from "lottie-react";
import React from "react";
import faqIcon from '../assets/Lottie/Faq.json';

const Faq = () => {
  return (
    <div className="mb-24 space-y-4 p-4 md:p-0">
      <div className="flex justify-center">
        <Lottie className="w-96" animationData={faqIcon}></Lottie>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium ">
          How does Tutor Time work?
        </div>
        <div className="collapse-content">
          <p>
            TutorTime helps you achieve your language learning ambitions. Find
            your ideal teacher and book a 1-on-1 lesson. There's no subscription
            or rigid schedule. Learn when you want, as much as you want. If
            you'd prefer to learn without a teacher, you can use TutorTime's
            handy learning tools. Improve your vocabulary, train your ear with
            podcasts, and put your knowledge to the test with quizzes. The
            TutorTime Community is always sharing new content with language
            lovers.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How many lessons a week can I take?
        </div>
        <div className="collapse-content">
          <p>
            We don't want to limit your learning. As long as you and your
            teacher have the time, you can take as many lessons as you want.
            Teachers on TutorTime allow you to go at your own pace. If you want
            to have a quick lesson during your lunch break, 30 minute or 45
            minute lessons are ideal. People looking for a longer session, you
            can book up to 90 minutes! We also offer lessons for impulsive
            learners. If you want to learn a language right now, you can book an
            Instant Lesson and start a trial lesson.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do I become a teacher on Tutor Time?
        </div>
        <div className="collapse-content">
          <p>
            Anyone is welcome to apply to be a teacher on Tutor Time. You can apply
            by clicking here There are two types of teachers on Tutor Time,
            community tutors and professional teachers. Professional teachers
            have proven experience teaching and the qualifications required to
            help you learn a language efficiently. Community tutors are
            passionate language-lovers who want to share their knowledge with
            others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
