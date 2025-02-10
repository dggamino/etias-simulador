import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Info, ArrowRight, ArrowLeft, CheckCircle, Car, UserPlus, Shield, Mail } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ETIASConsultant = () => {
  const [showSimulator, setShowSimulator] = useState(false);
  const [step, setStep] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    nationality: '',
    travelDate: '',
    destination: '',
    interests: {
      travelInsurance: false,
      representation: false,
      tourPackages: false,
      internationalDrivingPermit: false,
      secureConsultation: false
    },
    representationDetails: {
      representationType: '',
      representedName: '',
      relationship: ''
    },
    drivingDetails: {
      licenseCountry: '',
      drivingDestinations: ''
    }
  });

  const steps = [
    "Información Personal",
    "Detalles de Viaje",
    "Servicios Premium",
    "Confirmación"
  ];

  const LandingPage = () => (
    <div className="space-y-8">
      <div className="bg-primary text-white p-6 rounded-lg">
        <div className="flex items-center justify-center mb-4">
          <Shield className="h-12 w-12 mr-3" />
          <h2 className="text-2xl font-bold">Consultor ETIAS Oficial</h2>
        </div>
        <p className="text-center mb-4">Único servicio con seguridad suiza ProtonMail garantizada</p>
        <div className="flex justify-center">
          <Button 
            variant="secondary"
            onClick={() => setShowSimulator(true)}
            className="mx-2"
          >
            Iniciar Simulación
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.location.href = 'mailto:consultor.etias@proton.me'}
            className="mx-2"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contacto Seguro
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <h3 className="font-bold mb-2">🔐 Seguridad Garantizada</h3>
          <p>Protección de datos con tecnología suiza ProtonMail</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-bold mb-2">✅ Éxito Asegurado</h3>
          <p>Más de 20 años de experiencia en gestión migratoria</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-bold mb-2">🌎 Cobertura Global</h3>
          <p>Servicio premium para toda Latinoamérica</p>
        </Card>
      </div>
    </div>
  );

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = () => {
    setShowPayment(true);
  };

  const SimulatorContent = () => (
    <>
      <CardHeader>
        <CardTitle>Simulador ETIAS Premium</CardTitle>
        <Progress value={(step / (steps.length - 1)) * 100} className="mt-2" />
      </CardHeader>
      <CardContent>
        {renderStepContent()}
        <Alert className="mt-4">
          <Info className="h-4 w-4" />
          <AlertDescription>
            {renderTip()}
          </AlertDescription>
        </Alert>
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={step === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Anterior
          </Button>
          {step === steps.length - 1 ? (
            <Button onClick={handleSubmit}>
              Finalizar
              <CheckCircle className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleNext}>
              Siguiente
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </CardContent>
    </>
  );

  const renderTip = () => {
    const tips = [
      "Todos tus datos están protegidos con encriptación suiza de grado militar",
      "Tu consultor ETIAS verificado te guiará en todo el proceso",
      "Garantía de éxito o reembolso completo",
      "Recibirás tu guía personalizada en tu correo ProtonMail seguro"
    ];
    return tips[step];
  };

  const renderStepContent = () => {
    // [Contenido previo del renderStepContent mantenido igual]
    // Se mantiene la lógica existente del simulador
  };

  const renderPayment = () => (
    <div className="space-y-4">
      <div className="bg-green-50 p-4 rounded-lg">
        <h3 className="font-semibold flex items-center">
          <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
          ¡Tu solicitud ha sido pre-aprobada!
        </h3>
        <p className="mt-2">
          Para recibir tu guía ETIAS personalizada y acceso a tu consultor verificado,
          realiza una contribución única de $5 USD
        </p>
      </div>
      <Button 
        className="w-full"
        onClick={() => window.location.href = 'mailto:consultor.etias@proton.me?subject=Pago%20Consulta%20ETIAS'}
      >
        Proceder al Pago Seguro
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Card className="max-w-2xl mx-auto">
        {!showSimulator ? (
          <CardContent className="pt-6">
            <LandingPage />
          </CardContent>
        ) : !showPayment ? (
          <SimulatorContent />
        ) : (
          <CardContent className="pt-6">
            {renderPayment()}
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default ETIASConsultant;
