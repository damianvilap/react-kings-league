const API = "http://www.ies-azarquiel.es/paco/apikl/";
export class KingsLeagueAPI {

    static async getTeams() {
        try {
            const response = await fetch(`${API}/team`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching teams:', error);
            throw error;
        }
    }

    static async getPlayersByTeam(teamId) {
        try {
            const response = await fetch(`${BASE_URL}/team/${teamId}/player`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error fetching players for team ${teamId}:`, error);
            throw error;
        }
    }
}