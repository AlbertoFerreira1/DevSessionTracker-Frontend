export interface SessionData {
    id: number;
    user_id:number
    date: string;
    project_name: string;
    duration_minutes: number | null;
    topic?: string | null;
    notes?: string | null;
    blockers?: string | null;
    focus_score: number | null;
    
}