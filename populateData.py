import pandas as pd
import random
from datetime import datetime, timedelta
import json

# Function to generate random datetime strings
def random_datetime(start, end):
    return (start + timedelta(
        seconds=random.randint(0, int((end - start).total_seconds())),
    )).isoformat()

# Start and end datetime for generating random times
start_time = datetime(2024, 7, 16, 10, 26, 47)
end_time = datetime(2024, 7, 16, 18, 40, 15)

# List of functions to be used
functions = [
    "onGenerateFibulaPlanesTimerTimeout",
    "makeBooleanOperationsToFibulaSurgicalGuideBase",
    "sendFunctionCountToServer",
    "initializeSystemDiagnostics",
    "updateFirmwareVersions",
    "calculateOptimalPathways",
    "archiveOldLogFiles",
    "monitorNetworkLatency",
    "generateEncryptionKeys",
    "validateUserPermissions",
    "optimizeDatabaseQueries",
    "deploySoftwareUpdates",
    "auditSecurityCompliance",
    "scheduleSystemBackups",
    "analyzeServerPerformance",
    "configureVirtualMachines",
    "restoreArchivedData",
    "trackApplicationDependencies",
    "manageResourceAllocation",
    "simulateLoadBalancing",
    "verifyDataIntegrity",
    "cleanTemporaryFiles",
    "reportSystemHealthStatus"
]

# List of medical module names
modules = [
    "CardiovascularAssessmentTool",
    "NeuralNetworkDiagnostics",
    "OrthopedicProcedureSimulator",
    "PediatricCareAssistant",
    "OphthalmologyVisionAnalyzer",
    "GastrointestinalTracker",
    "EndocrineHealthMonitor",
    "PulmonaryFunctionTester",
    "DermatologyTreatmentPlanner",
    "NeurosurgeryNavigationSystem",
    "HematologyAnalyzer",
    "InfectiousDiseaseMapper",
    "RadiologyImagingCenter",
    "UrologyManagementSystem",
    "ObstetricsLaborTracker",
    "GeneticDisorderExplorer",
    "ImmunologyResponseEvaluator",
    "OncologyTreatmentOptimizer",
    "EmergencyResponseCoordinator",
    "MentalHealthTherapyAssistant",
    "RehabilitationExercisePlanner",
    "PainManagementAdvisor",
    "SleepDisorderAnalyzer",
    "AllergyReactionTracker",
    "DentalHealthProfiler",
    "NutritionAndDietPlanner",
    "FitnessAndWellnessGuide",
    "BloodPressureRegulator",
    "DiabetesCareManager",
    "WoundCareToolkit",
    "SubstanceAbuseCounselor",
    "GeriatricCarePlanner",
    "ENTProcedureGuide",
    "FertilityAndIVFHelper",
    "SportsInjuryPreventor",
    "PharmacyInventoryManager",
    "PatientEngagementHub",
    "SurgicalInstrumentTracker",
    "HealthcareComplianceMonitor",
    "MedicalResearchDatabase",
    "TelemedicineConsultationPortal",
    "VaccineAdministrationLog",
    "AmbulanceDispatchSystem",
    "MedicalWasteManagement",
    "HospitalRoomAllocationSystem",
    "PatientFeedbackAnalyzer",
    "MedicalBillingAndCoding",
    "HealthcarePolicyLibrary",
    "ClinicalTrialManager",
    "MedicalEducationSimulator"
]

# Generate data for each medical module
data = []
for module in modules:
    num_functions = random.randint(1, 10)  # Random number of functions (1 to 10)
    for _ in range(num_functions):
        data.append({
            "function": random.choice(functions),
            "time": random_datetime(start_time, end_time),
            "selected_module": module
        })

# Convert to DataFrame
df = pd.DataFrame(data)

# Convert DataFrame to JSON and write to file
with open('data.json', 'w') as file:
    file.write(df.to_json(orient='records', date_format='iso', indent=4))