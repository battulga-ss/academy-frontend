import { useParams, Link } from "react-router-dom";
import { useGetMoviesTans } from "../hooks/useGetMoviesTans";
import { useShowCommentTans } from "../hooks/useShowCommentTans";
import { LoaderCircle, Star, Calendar, Clock, ArrowLeft } from "lucide-react";
import { useAddComment } from "../hooks/useAddComment";
import { useRef } from "react";
export const ShowComments = () => {
  const { id } = useParams();

  const { comments, loading } = useShowCommentTans();
};

export const MovieDetail = () => {
  const { id } = useParams();
  const { movies, loading } = useGetMoviesTans();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const { Commentadd } = useAddComment();

  const AddComment = () => {
    const value = inputRef?.current?.value;
    const email = emailRef?.current?.value;
    if (!value) {
      return window.alert("comment oo oruulna uu!");
    }
    if (!email) {
      return window.alert("email ee oruulna uu!");
    }
    Commentadd({ text: value, movie_id: id, email: email });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="animate-spin text-white w-12 h-12" />
      </div>
    );
  }

  const movie = movies?.find((m) => m._id === id);
  if (!movie) {
    return (
      <div className="text-center text-red-400 mt-20 text-xl font-semibold">
        Movie not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors font-medium mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          Back to movies
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="relative group">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-4">
                    {movie.title}
                  </h1>
                  <h2 className="space-y-6 text-3xl font-bold text-white mb-4">
                    GENRES:{movie.genre}
                  </h2>
                  <div className="flex flex-wrap gap-6 text-slate-300">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {movie.year}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {movie.runtime} min
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">
                    Plot
                  </h2>
                  <p className="text-slate-300 leading-relaxed">{movie.plot}</p>
                </div>

                <div className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
                  <div className="flex items-center gap-4 text-yellow-400 mb-4">
                    <Star className="w-5 h-5" />
                    <span className="text-2xl font-bold">
                      ⭐ {movie.imdb.rating}/10
                    </span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <h2 className="text-amber-50 text-2xl font-semibold">
                    Comment
                  </h2>
                  <input
                    ref={emailRef}
                    placeholder="email"
                    className="w-full p-3 rounded-lg bg-amber-700 text-amber-50 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <input
                    ref={inputRef}
                    placeholder="comment"
                    className="w-full p-3 rounded-lg bg-amber-700 text-amber-50 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />

                  <button
                    className="px-6 py-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition"
                    onClick={AddComment}
                  >
                    Add Comment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
