import responseHandler from "../handlers/response.handler";
import tmdbApi from "../tmdb/tmdb.api"
import userModel from "../models/user.model";
import favoriteModel from '../models/favorite.model';
import reviewModel from "../models/review.model"

const getList = async (req, res) => {
    try {
        const { page } = req.query
        const { mediaType, mediaCategory } = req.params;

        const response = await tmdbApi.mediaList({ mediaType, mediaCategory, page });

        return responseHandler.ok(res, response)
    } catch {
        responseHandler.error(res)
    }
}

const getGenres = async (req, res) => {
    try {
        const { mediaType } = req.params;

        const response = await tmdbApi.mediaGenres({ mediaType })

        return responseHandler.ok(res, response)
    } catch {
        responseHandler.error(res)
    }
}

const search = async (req, res) => {
    try {
        const { mediaType } = req.params
        const { query, page } = req.query;

        const response = await tmdbApi.mediaSearch({
            query,
            page,
            mediaType: mediaType === "people" ? "person" : mediaType
        })

        responseHandler.ok(res, response)
    } catch {
        responseHandler.error(res)
    }
}