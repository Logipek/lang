module.exports = {
    global: {
        successful: "Successful.",
        something_went_wrong: "Something went wrong.",
        you_are_banned: "You are banned from Giftix!",
        beta_mode: "Giftix is currently in beta mode, you must be a beta user to access it.",
        maintenance_mode: "We are currently doing maintenance to improve our systems, please try later."
    },
    server: {
        no_token_provided: "No authorization token provided!",
        not_found: "404: Route does not exist."
    },
    guilds: {
        channels: {
            not_found: "Guild not found!"
        }
    },
    requireds: {
        github: {
            connect_account: "Connect your GitHub account to join in the giveaway.",
            follow_account: "Follow the GitHub profile to join the giveaway."
        },
        youtube: {
            connect_account: "Connect your YouTube account to join in the giveaway.",
            terminated: "Your YouTube session has been terminated, log in again.",
            subscribe_channel: "Subscribe to the YouTube channel to join the giveaway."
        }
    },
    giveaway: {
        cancel: {
            not_found: "Giveaway not found!",
            bot_not_found: "The bot was not found on the guild!",
            user_not_found: "You're not in the guild!"
        },
        create: {
            not_found: "Guild not found!",
            user_not_found: "You're not in the guild!",
            channel_not_found: "Channel not found!",
            giveaway_not_found: "Giveaway not found!",
            access_denied: "Access denied!",
            channel_type: "Channel type must be text!",
            winners_min: "Winners count minumum must be 1!",
            winners_max: "Winners count maximum must be 10!",
            duration_min: "Duration minumum must be 1 minute!",
            duration_max: "Duration maximum must be 3 months!",
            limit: "Giveaway limit reached!",
            connect_account: "You haven't linked your account!",
            no_access: "Bot has no access to the channel!",
            specify: "Please specify a {PARAM}!"
        },
        join: {
            not_found: "Giveaway not found!",
            joined: "You've already joined the giveaway!"
        },
        overview: {
            not_found: "Giveaway not found!"
        }
    }
};
