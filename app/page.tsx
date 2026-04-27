import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileUp, Files, HardDrive, Upload } from 'lucide-react';

export default function Home() {
  return (
    <div className="p-6 md:p-8 lg:p-10 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AWS Projects</h1>
        <p className="text-muted-foreground mt-1">
          Procesador de imágenes y documentos, utilizamos servicios como AWS Lambda, Amazon S3, Amazon Rekognition y AWS Textract
        </p>
      </div>

      {/* Acceso rápido */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/upload">
          <Card className="h-full transition-shadow hover:shadow-md cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Subir Archivos</CardTitle>
              <Upload className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-2xl font-bold">
                <FileUp className="h-5 w-5 text-muted-foreground" />
                <span>Cargar</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Al subir un archivo a un bucket de S3 (input), se activa automáticamente una función Lambda.
              </p>
            </CardContent>
          </Card>
        </Link>
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bucket</CardTitle>
            <HardDrive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground mt-1">
              <li>Si es una imagen (.jpg, .jpeg, .png, etc.) → usa Amazon Rekognition para detectar etiquetas.</li>
              <li>Si es un documento (.pdf, .png, .jpg, .jpeg, .tiff) → usa Amazon Textract para extraer texto, tablas y formularios.</li>
            </p>
          </CardContent>
        </Card>
        <Link href="/files">
          <Card className="h-full transition-shadow hover:shadow-md cursor-pointer">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Mis Archivos</CardTitle>
              <Files className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-2xl font-bold">
                <HardDrive className="h-5 w-5 text-muted-foreground" />
                <span>Explorar</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                El resultado del análisis en formato JSON en el bucket de salida (output)
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Guía rápida */}
      <Card>
        <CardHeader>
          <CardTitle>Guía Rápida</CardTitle>
          <CardDescription>
            Primeros pasos para usar la aplicación.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                1
              </span>
              <div>
                <h3 className="font-medium">Sube archivos</h3>
                <p className="text-sm text-muted-foreground">
                  Ve a <strong>Subir</strong> y arrastra tus archivos al bucket S3.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                2
              </span>
              <div>
                <h3 className="font-medium">Explora</h3>
                <p className="text-sm text-muted-foreground">
                  Revisa tus archivos en <strong>Archivos</strong>, ordenados por fecha.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                3
              </span>
              <div>
                <h3 className="font-medium">Descarga</h3>
                <p className="text-sm text-muted-foreground">
                  Haz clic en el ícono de descarga para bajar cualquier archivo.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
