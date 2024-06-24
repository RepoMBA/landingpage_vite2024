import React from "react";

export default function HowDoesItWorkSection() {
  return (
    <div>
      <section className="pt-10 px-4 sm:px-6 lg:px-24">
        <div className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold leading-none mb-1 sm:mb-2">
          How does it work?
        </div>
        <div className="text-center text-[#4e4e4e] text-base mb-12 sm:mb-20">
          Add a small JavaScript snippet to your site — it takes 30 seconds to
          get started
        </div>

        {/* First Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-12 items-center">
          <div className="lg:w-full">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6">
              Monitor customer activity in real time
            </h1>
            <p className="text-base font-light">
              See which pages your visitors are on in real time, what they are
              searching for within your Knowledge Base and how often they visit
              your website. View activity across their entire journey. See
              clearly which team member responded to a customer last and
              maintain a complete conversation history.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-full max-w-[450px]"
              src="https://www.tawk.to/wp-content/uploads/2022/12/tawk-homepage_Monitor-Real-Time-10.png"
              alt=""
            />
          </div>
        </div>

        <img
          src="https://www.tawk.to/wp-content/uploads/2020/08/line_right.png"
          alt=""
          className="max-w-[472px] w-full mx-auto mb-12"
        />

        {/* Second Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-12 items-center">
          <div className="flex justify-center items-center">
            <img
              className="w-full max-w-[450px]"
              src="https://www.tawk.to/wp-content/uploads/2020/08/kb-geo-cro.png"
              alt=""
            />
          </div>
          <div className="lg:w-full">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6">
              Meet customers where they are
            </h1>
            <p className="text-base font-light">
              Access is the currency of the web. You need to be where your
              customers are, and if you’re not, your competitors will be. With
              tools like Live Chat, Ticketing, a Knowledge Base and video and
              voice add-ons, you have what you need to be there for customers
              when and where they need you most.
            </p>
          </div>
        </div>

        <img
          src="https://www.tawk.to/wp-content/uploads/2020/08/line_left.png"
          alt=""
          className="max-w-[472px] w-full mx-auto mb-12"
        />

        {/* Third Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 mb-12 items-center">
          <div className="lg:w-full">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6">
              Collaborate and assign conversations
            </h1>
            <p className="text-base font-light">
              Tag and assign conversations to members of your team and ensure
              the right person is responding at the right time. Seeing the
              entire journey alongside customer data gives you the power to
              respond with context and ultimately create memorable and positive
              customer experiences.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-full max-w-[450px]"
              src="https://www.tawk.to/wp-content/uploads/2020/08/answer-chat-in-mobile-c.png"
              alt=""
            />
          </div>
        </div>

        <img
          src="https://www.tawk.to/wp-content/uploads/2020/08/line_right.png"
          alt=""
          className="max-w-[472px] w-full mx-auto mb-12"
        />

        {/* Fourth Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold leading-none mb-4 sm:mb-6">
            Have intelligent conversations
          </div>
          <p className="text-base text-center max-w-[400px] w-full text-[#4e4e4e] mb-12">
            Being able to respond to a conversation within the context of a
            customer journey, armed with shortcuts and Knowledge Base articles,
            makes it easy to deliver epic customer experiences.
          </p>
        </div>
      </section>
    </div>
  );
}
