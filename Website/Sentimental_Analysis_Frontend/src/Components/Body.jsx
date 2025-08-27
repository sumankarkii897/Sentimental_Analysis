
import React, { useState } from "react";
import axios from "axios";
import bg from "../assets/backgroundimg.jpg";
import Banner from "./Banner";

function Body() {
  const [inputText, setInputText] = useState("");
  const [sentiment, setSentiment] = useState("");
  const [loading, setLoading] = useState(false);

  const checkSentiment = async () => {
    if (!inputText.trim()) return;

    //  Only allowing Nepali text
    const nepaliRegex = /[\u0900-\u097F]/;
    if (!nepaliRegex.test(inputText)) {
      setSentiment("कृपया नेपाली वाक्य लेख्नुहोस्।");
      return;
    }

    setLoading(true);
    setSentiment("");

    try {
      const token = localStorage.getItem("access");
      if (!token) {
        setSentiment("Login required to check sentiment.");
        setLoading(false);
        return;
      }

      //  Send JWT token in Authorization header
      const response = await axios.post(
        "http://127.0.0.1:8000/api/sentiment/",
        { sentence: inputText },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data && response.data.sentiment) {
        setSentiment(response.data.sentiment);
      } else {
        setSentiment("Unable to classify sentiment");
      }
    } catch (error) {
      console.error("Error fetching sentiment:", error);
      setSentiment(
        error.response?.status === 401
          ? "Unauthorized. Please login again."
          : "Error: Could not connect to server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Banner />
      <div
        className="m-0 w-full h-[50vh] bg-center bg-cover flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 opacity-75"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <input
          type="text"
          className={`w-full max-w-xl px-4 py-3 border rounded-md outline-none mb-6
             bg-white shadow-lg opacity-70 focus:opacity-100 hover:opacity-100
             focus:ring-2 focus:ring-blue-500 transition duration-300 text-base sm:text-lg
             ${sentiment === "कृपया नेपाली वाक्य लेख्नुहोस्।" ? "border-red-500" : "border-gray-300"}`}
          placeholder="नेपाली वाक्य लेख्नुहोस्..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button
          onClick={checkSentiment}
          className="w-42 max-w-xl bg-blue-700 hover:bg-blue-800 focus:bg-blue-900
                     text-white font-semibold px-5 py-2.5 rounded-md mb-6 shadow-lg
                     transition-colors duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!inputText.trim() || loading}
        >
          {loading ? "Analyzing..." : "Check Sentiment"}
        </button>

        {sentiment && (
          <p
            className={`w-full max-w-xl text-center font-extrabold text-xl sm:text-2xl
                        ${
                          sentiment.includes("Positive")
                            ? "text-green-700"
                            : sentiment.includes("Negative")
                            ? "text-red-700"
                            : sentiment === "कृपया नेपाली वाक्य लेख्नुहोस्।"
                            ? "text-red-600"
                            : "text-red-600"
                        }`}
          >
            {sentiment}
          </p>
        )}
      </div>
    </>
  );
}

export default Body;
