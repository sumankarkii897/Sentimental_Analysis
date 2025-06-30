import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function About() {
  return (
    <>
    // Main sentiment
   <div className="bg-gradient-to-b from-purple-50 to-white min-h-screen py-10 px-6 sm:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-700 mb-6">About Sentiment Analysis</h1>
          <p className="text-gray-700 text-lg mb-10">
            Sentiment Analysis helps in identifying the emotional tone behind a series of words. It allows us to
            understand opinions, attitudes, and emotions expressed in a piece of text.
          </p>

          <div className="grid gap-6 md:grid-cols-3 text-left">
            {/* Positive */}
            // positive sentiment 
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow hover:shadow-md transition-all">
              <h2 className="text-xl font-semibold text-green-700 mb-2">😊 Positive Sentiment</h2>
              <p className="text-gray-700">
                Positive sentiment shows joy, satisfaction, or praise. It occurs when users express appreciation,
                compliments, or happiness. Words like <strong>great</strong>, <strong>love</strong>, or{' '}
                <strong>awesome</strong> are common in this tone.
              </p>
            </div>

            {/* Negative */}
            //negative sentiment
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 shadow hover:shadow-md transition-all">
              <h2 className="text-xl font-semibold text-red-700 mb-2">😠 Negative Sentiment</h2>
              <p className="text-gray-700">
                Negative sentiment reveals frustration, criticism, or disappointment. It appears in complaints or
                negative feedback using words like <strong>bad</strong>, <strong>hate</strong>, or{' '}
                <strong>terrible</strong>.
              </p>
            </div>

            {/* Neutral */}
            // neutral sentiment
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-6 shadow hover:shadow-md transition-all">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">😐 Neutral Sentiment</h2>
              <p className="text-gray-700">
                Neutral sentiment lacks strong emotion. It occurs in factual or objective statements. There’s no
                judgment — just information or simple queries.
              </p>
            </div>
          </div>

          <div className="mt-10 text-gray-600">
            <p>
              Whether it's social media, customer reviews, or feedback forms, sentiment analysis helps decode
              human emotion and make better decisions.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
// contains three sections positive, negative and neutral and upper secction contains main sentiment 

export default About