'use client';

import {
  User,
  Sparkles,
  Bell,
  Palette,
} from 'lucide-react';

import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
<<<<<<< HEAD
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Settings, User, Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/context/auth-context';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

const profileFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function SettingsPage() {
  const { user, loading, updateUserProfile } = useAuth();
  const { toast } = useToast();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user?.name || '',
    },
  });
  
  useEffect(() => {
    if (user) {
        form.reset({ name: user.name || '' });
    }
  }, [user, form]);


  const onSubmit = async (data: ProfileFormValues) => {
    if (!updateUserProfile) return;
    try {
      await updateUserProfile({ name: data.name });
      toast({
        title: 'Profile Updated',
        description: 'Your name has been successfully updated.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Update Failed',
        description: 'Could not update your profile. Please try again.',
      });
    }
  };

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-5 w-72" />
        </div>
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-36" />
            <Skeleton className="h-4 w-56" />
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-4 w-64" />
            </div>
            <Skeleton className="h-10 w-28" />
          </CardContent>
        </Card>
      </div>
    );
  }

=======
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
>>>>>>> edf8cfb (Final TravelSync production update)
  return (
    <div className="space-y-8 p-6">

      {/* Header */}
      <div>

        <h1 className="text-5xl font-bold tracking-tight">
          Settings
        </h1>

        <p className="mt-2 text-lg text-zinc-400">
          Manage your workspace and preferences.
        </p>

      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">

        <Card className="premium-card rounded-3xl border border-white/10">
          <CardContent className="p-6">
            <p className="text-sm text-zinc-400">
              Trips Created
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              12
            </h2>
          </CardContent>
        </Card>

        <Card className="premium-card rounded-3xl border border-white/10">
          <CardContent className="p-6">
            <p className="text-sm text-zinc-400">
              Countries
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              5
            </h2>
          </CardContent>
        </Card>

        <Card className="premium-card rounded-3xl border border-white/10">
          <CardContent className="p-6">
            <p className="text-sm text-zinc-400">
              AI Plans
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              28
            </h2>
          </CardContent>
        </Card>

        <Card className="premium-card rounded-3xl border border-white/10">
          <CardContent className="p-6">
            <p className="text-sm text-zinc-400">
              Budget Saved
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              ₹18k
            </h2>
          </CardContent>
        </Card>

      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-2">

        {/* Profile */}
        <Card className="premium-card rounded-3xl border border-white/10">

          <CardContent className="p-6">

            <div className="mb-6 flex items-center gap-3">

              <div className="rounded-2xl bg-violet-500/10 p-2">
                <User className="h-6 w-6 text-violet-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Profile Settings
                </h2>

                <p className="text-sm text-zinc-400">
                  Manage your personal information.
                </p>
              </div>

            </div>

            <div className="space-y-4">

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Display Name
                </label>

                <Input
                  defaultValue="ankit modanwal"
                  className="
                    h-12 rounded-2xl
                    border-white/10
                    bg-white/[0.03]
                  "
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Email
                </label>

                <Input
                  defaultValue="ankit001@gmail.com"
                  className="
                    h-12 rounded-2xl
                    border-white/10
                    bg-white/[0.03]
                  "
                />
              </div>

              <Button
                className="
                  h-12 rounded-2xl
                  bg-violet-500
                  hover:bg-violet-600
                "
              >
                Save Changes
              </Button>

            </div>

          </CardContent>

        </Card>

        {/* AI Tools */}
        <Card className="premium-card rounded-3xl border border-white/10">

          <CardContent className="p-6">

            <div className="mb-6 flex items-center gap-3">

              <div className="rounded-2xl bg-cyan-500/10 p-2">
                <Sparkles className="h-6 w-6 text-cyan-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  AI Travel Tools
                </h2>

                <p className="text-sm text-zinc-400">
                  Customize your AI-powered experience.
                </p>
              </div>

            </div>

            <div className="space-y-4">

              <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4">

                <div>
                  <h3 className="font-medium">
                    Smart Trip Suggestions
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    AI automatically recommends destinations.
                  </p>
                </div>

                <Switch defaultChecked />

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4">

                <div>
                  <h3 className="font-medium">
                    Auto Budget Planning
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Predict trip expenses using AI analysis.
                  </p>
                </div>

                <Switch />

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4">

                <div>
                  <h3 className="font-medium">
                    AI Itinerary Generator
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Generate complete travel plans instantly.
                  </p>
                </div>

                <Switch defaultChecked />

              </div>

            </div>

          </CardContent>

        </Card>

        {/* Notifications */}
        <Card className="premium-card rounded-3xl border border-white/10">

          <CardContent className="p-6">

            <div className="mb-6 flex items-center gap-3">

              <div className="rounded-2xl bg-yellow-500/10 p-2">
                <Bell className="h-6 w-6 text-yellow-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Notifications
                </h2>

                <p className="text-sm text-zinc-400">
                  Control travel alerts and reminders.
                </p>
              </div>

            </div>

            <div className="space-y-4">

              <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4">

                <div>
                  <h3 className="font-medium">
                    Email Notifications
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Receive important trip updates via email.
                  </p>
                </div>

                <Switch defaultChecked />

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4">

                <div>
                  <h3 className="font-medium">
                    Flight Alerts
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Get flight delays and departure notifications.
                  </p>
                </div>

                <Switch defaultChecked />

              </div>

            </div>

          </CardContent>

        </Card>

        {/* Appearance */}
        <Card className="premium-card rounded-3xl border border-white/10">

          <CardContent className="p-6">

            <div className="mb-6 flex items-center gap-3">

              <div className="rounded-2xl bg-pink-500/10 p-2">
                <Palette className="h-6 w-6 text-pink-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  Appearance
                </h2>

                <p className="text-sm text-zinc-400">
                  Customize your interface experience.
                </p>
              </div>

            </div>

            <div className="space-y-4">

              <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4">

                <div>
                  <h3 className="font-medium">
                    Dark Mode
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Enable elegant dark appearance.
                  </p>
                </div>

                <Switch defaultChecked />

              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] p-4">

                <div>
                  <h3 className="font-medium">
                    UI Animations
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Smooth transitions and motion effects.
                  </p>
                </div>

                <Switch defaultChecked />

              </div>

            </div>

          </CardContent>

        </Card>

      </div>

    </div>
  );
}