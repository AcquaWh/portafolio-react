$GCLOUD = "C:\Users\Xochilt_Murrieta\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd"
$PROJECT_ID = "fernandacruz"
$REGION = "us-central1"
$SERVICE = "fernandacruz-portfolio"
$IMAGE = "gcr.io/$PROJECT_ID/$SERVICE"

$env:PATH = "C:\nvm4w\nodejs;" + $env:PATH

Write-Host "== 1. Habilitando servicios necesarios ==" -ForegroundColor Cyan
& $GCLOUD services enable run.googleapis.com cloudbuild.googleapis.com containerregistry.googleapis.com

Write-Host "`n== 2. Construyendo imagen en Cloud Build y subiendo a GCR ==" -ForegroundColor Cyan
Set-Location $PSScriptRoot
& $GCLOUD builds submit --tag $IMAGE .

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Fallo el build. Revisa los logs arriba." -ForegroundColor Red
    exit 1
}

Write-Host "`n== 3. Desplegando en Cloud Run ==" -ForegroundColor Cyan
& $GCLOUD run deploy $SERVICE `
  --image $IMAGE `
  --platform managed `
  --region $REGION `
  --allow-unauthenticated `
  --port 8080 `
  --memory 512Mi `
  --min-instances 0 `
  --max-instances 3

Write-Host "`n== Deploy completado! ==" -ForegroundColor Green
Write-Host "URL del servicio:" -ForegroundColor Green
& $GCLOUD run services describe $SERVICE --region $REGION --format "value(status.url)"
